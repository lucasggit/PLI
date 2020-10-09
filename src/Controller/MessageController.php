<?php

namespace App\Controller;

use App\Manager\Manager;
use App\Entity\Conversation;
use App\Entity\Message;
use App\Controller\ConversationController;
use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use App\Repository\ParticipantRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Client;
use App\Entity\Coach;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mercure\PublisherInterface;
use Symfony\Component\Mercure\Update;

/**
 * @Route("/messages", name="messages")
 */
class MessageController extends AbstractController
{

    const ATTRIBUTES_TO_SERIALIZE = ['id', 'content', 'createdAt', 'mine'];

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    /**
     * @var MessageRepository
     */
    private $messageRepository;
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(EntityManagerInterface $entityManager,
                                MessageRepository $messageRepository,
                                UserRepository $userRepository,
                                ParticipantRepository $participantRepository,
                                PublisherInterface $publisher)
    {
        $this->entityManager = $entityManager;
        $this->messageRepository = $messageRepository;
        $this->userRepository = $userRepository;
        $this->participantRepository = $participantRepository;
        $this->publisher = $publisher;
    }

    /**
     * @Route("/{id}", name="getMessages", methods={"GET"})
     * @param Request $request
     * @param Conversation $conversation
     * @return Response
     */
    public function index(Request $request, Conversation $conversation)
    {
        // Puis-je voir la conversation ?
        $this->denyAccessUnlessGranted('view', $conversation);

        $messages = $this->messageRepository->findMessageByConversationId(
            $conversation->getId()
        );

        /**
         * @var $message Message
         */
        array_map(function ($message) {
            $message->setMine(
                $message->getUser()->getId() === $this->getUser()->getId()
                    ? true : false
            );
        }, $messages);


        return $this->json($messages, Response::HTTP_OK, [], [
            'attributes' => self::ATTRIBUTES_TO_SERIALIZE
        ]);
    }

    /**
     * @Route("/{id}", name="newMessage", methods={"POST"})
     * @param Request $request
     * @param Conversation $conversation
     * @param SerializerInterface $serializer
     * @return JsonResponse
     * @throws \Exception
     */
    public function newMessage(Request $request, Conversation $conversation, SerializerInterface $serializer)
    {
        $user = $this->getUser();
        $recipient = $this->participantRepository->findParticipantByConversationIdAndUserId(
            $conversation->getId(),
            $user->getId()
        );

        // TODO: put everything back
        $content = $request->get('content', null);
        $message = new Message();
        $message->setContent($content);
        $message->setUser($user);


        $conversation->addMessage($message);
        $conversation->setLastMessage($message);

        $this->entityManager->getConnection()->beginTransaction();
        try {
            $this->entityManager->persist($message);
            $this->entityManager->persist($conversation);
            $this->entityManager->flush();
            $this->entityManager->commit();
        } catch (\Exception $e) {
            $this->entityManager->rollback();
            throw $e;
        }
        $message->setMine(false);
        $messageSerialized = $serializer->serialize($message, 'json', [
          'attributes' => ['id', 'content', 'createdAt', 'mine' => ['id']]
        ]);

        $update = new Update(
          [
              sprintf("/conversations/%s", $conversation->getId()),
              sprintf("/conversations/%s", $recipient->getUser()->getUsername()),
          ],
          $messageSerialized,
          true
        );

        $this->publisher->__invoke($update);

        $message->setMine(true);
        return $this->json($message, Response::HTTP_CREATED, [], [
            'attributes' => self::ATTRIBUTES_TO_SERIALIZE
        ]);
    }

    public function declare_convs(Request $request, $coachs, $clients, string $type)
    {
      //Déclaration des premières conversations
      if ($type == "client") {
        $response = $this->forward('App\Controller\ConversationController::new_conv', [
            'request'  => $request,
            'id' => $coachs->getUser()->getId(),
        ]);
      } else if ($type == "coach") {
          foreach ($clients as $client) {
            $response = $this->forward('App\Controller\ConversationController::new_conv', [
                'request'  => $request,
                'id' => $client->getUser()->getId(),
            ]);
          }
      }
    }

    /**
     * @Route("/", name="security_messages")
     */
    public function messages(Request $request, Manager $Lemanager, UserPasswordEncoderInterface $encoder)
    {
        //Récupération des messages côté clients et coachs
        $user=$this->get('security.token_storage')->getToken()->getUser();

        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
        $Clientrepository = $this->getDoctrine()->getRepository(Client::class);

        if ($user->getIscoach() == 1){
            $coach = $Coachrepository->findOneBy(['User' => $user]);
            $clients = $Clientrepository->findBy(['coach' => $coach]);
            if ($clients != null)
              $this->declare_convs($request, $coach, $clients, "coach");
        } else {
            $clients = $Clientrepository->findOneBy(['User' => $user]);
            $coach_id = $clients->getCoach();
            $coach = $Coachrepository->findOneBy(['id' => $coach_id]);
            if ($coach != null)
              $this->declare_convs($request, $coach, $clients, "client");
        }

        $this->denyAccessUnlessGranted('VIEW', $user);

        return $this->render('security/messages.html.twig', [
            'Coach_' => $coach,
            'Client_' => $clients,
        ]);
    }
}
