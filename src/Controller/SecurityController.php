<?php

namespace App\Controller;
use App\Date\Month;
use App\Entity\Client;
use App\Entity\Coach;
use App\Entity\ConfirmMail;
use App\Entity\User;
use App\Entity\Produits;
use App\Entity\Images;
use App\Entity\Notes;
use App\Form\EventType;
use App\Form\NotesType;
use App\Form\UserType;
use App\Manager\Manager;
use App\Form\ProduitsType;
use App\Entity\Event;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormError;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Session\Session;


class SecurityController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(Request $request)
    {
        $user = $this->get('security.token_storage')->getToken()->getUser();
        $username = null;
        $content = null;
        $date = null;

        if ($user == "anon."){
            $user = null;
            $coach = null;
            $client = null;
            $produits = null;
        }else{
        $Prodrepository = $this->getDoctrine()->getRepository(Produits::class);
        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
        $Clientrepository = $this->getDoctrine()->getRepository(Client::class);
        $conversation = $response = $this->forward('App\Controller\ConversationController::getConvs', [
            'request'  => $request,
        ]);

        //Conversion Object to Array pour manipulez à l'intérieur
        $check = (array)$conversation;
        $name = array_keys($check)[0];

        //Vérification qu'une conversation est bien présente
        if (json_decode($check[$name])[0] != null) {
          //Parsing et récupération de la dernière conversation
          $res = json_decode($check[$name])[0][0];
          $username = $res->{'username'};
          $content = $res->{'content'};
          $date = $res->{'createdAt'};
        }

        if ($user->getIscoach() == 1){
           $coach = $Coachrepository->findOneBy(['User' => $user]);
           $client = $Clientrepository->findAll();
        } else {
            $client = $Clientrepository->findOneBy(['User' => $user]);
            $coach = $Coachrepository->findAll();
        }
            $produits = $Prodrepository->findBy(['Coach' => $coach]);
        }



        return $this->render('security/index.html.twig', [
            'controller_name' => 'SecurityController',
            'Coach_' => $coach,
            'Client_' => $client,
            'produits' => $produits,
            'last_mess_username' => $username,
            'last_mess_content' => $content,
            'last_mess_date' => $date
        ]);
    }


    /**
     * @Route("/register", name="security_registration")
     */
    public function registration(Request $request, Manager $Lemanager, UserPasswordEncoderInterface $encoder, \Swift_Mailer $mailer) {

        $user = new User();
        $ConfirmMail = new ConfirmMail;
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $Userrepository = $this->getDoctrine()->getRepository(User::class);
            $username = $form->get('username')->getData();
        if ($Userrepository->findOneBy(['username' => $username])) { // you need to pick a field that determines how you will search for the user via the repository
            $form->addError(new FormError('Username existant !'));
        }else{
                $Lemanager->addUser($user, $encoder, $ConfirmMail);
                // $Lemanager->addConfirmMail($ConfirmMail, $user);
                $iscoach = $form->get('Iscoach')->getData();
                if($iscoach == true) {
                    $coach = new Coach;
                    $Lemanager->addCoach($coach, $user);
                } else {
                    $client = new Client;
                    $Lemanager->addClient($client, $user);
                }

                $Lemanager->editUserConf($user, $ConfirmMail);
                $message = (new \Swift_Message('My_eCoach - Confirmez votre mail !'))
                            ->setFrom('myecoach@service.com')
                            ->setTo($user->getEmail())
                            ->setBody($ConfirmMail->getToken()
                            )
                        ;
                $mailer->send($message);

                return $this->redirectToRoute('security_login');
            }
        }

        return $this->render('security/registration.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/ConfirmMail/$id", name="security_ConfirmMail")
     */
    public function ConfirmMail(Request $request, Manager $Lemanager, UserPasswordEncoderInterface $encoder, int $id) {

        $Userrepository = $this->getDoctrine()->getRepository(User::class);
        $user = $Userrepository->findOneBy(['id' => $id]);


            return $this->redirectToRoute('security_login');

        return $this->render('security/ConfirmMail.html.twig');
    }

    /**
     * @route ("/login", name="security_login")
     */
    public function login(){
        return $this->render('security/login.html.twig');
    }

    /**
     * @Route("/logout", name="security_logout")
     */
    public function logout() {

    }


    /**
     * @Route("/reMail", name="security_reMail")
     */
    public function reMail(\Swift_Mailer $mailer): Response
    {

        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('VIEW', $user);

        $message = (new \Swift_Message('My_eCoach - Confirmez votre mail !'))
                    ->setFrom('myecoach@service.com')
                    ->setTo($user->getEmail())
                    ->setBody("Votre Token : ".$user->getConfirmMail()->getToken().""
                    );
        $mailer->send($message);

        return $this->redirectToRoute('security_profil');

}

    /**
     * @Route("/profil", name="security_profil")
     */
    public function profil(Request $request, Manager $manager, \Swift_Mailer $mailer): Response
    {
            $user=$this->get('security.token_storage')->getToken()->getUser();
            $this->denyAccessUnlessGranted('VIEW', $user);

            $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
            $Clientrepository = $this->getDoctrine()->getRepository(Client::class);
            $ConfMailrepository = $this->getDoctrine()->getRepository(ConfirmMail::class);
            $coach = $Coachrepository->findOneBy(
            ['User' => $user]
            );
            $defaultData = ['message' => 'Clef de lien...'];
            $defaultData1 = ['message' => 'Clef à 6 chiffres reçue par mail...'];

            $form = $this->createFormBuilder($defaultData)
                        ->add('Client', TextType::class)
                        ->getForm();

            $form->handleRequest($request);

            $form1 = $this->createFormBuilder($defaultData1)
                        ->add('Token', TextType::class)
                        ->getForm();

            $form1->handleRequest($request);

            if ($form1->isSubmitted() && $form1->isValid()) {
                $data1 = $form1->get('Token')->getData();
                $ConfirmMail = $ConfMailrepository->findOneBy(['id' => $user->getConfirmMail()->getId()]);
                if ($data1 == $ConfirmMail->getToken()) {
                    $ConfirmMail->setIsConfirm(1);
                    $manager->editConfMail($ConfirmMail);
                    return $this->redirectToRoute('security_profil');
                } else {
                    echo "<script>alert(\"Clef incorrect !\")</script>";
                }
            }

            if ($form->isSubmitted() && $form->isValid()) {
                // data is an array with "name", "email", and "message" keys
                $data = $form->getData();
                $add_client = $Clientrepository->findOneBy(['Link' => $data]);
                if (is_null($add_client))
                {
                    echo "<script>alert(\"Client introuvable\")</script>";
                } else {
                    $have_coach = $add_client->getCoach();
                    if (is_null($have_coach))
                    {
                        $message = (new \Swift_Message('Hello Email'))
                        ->setFrom('myecoach@service.com')
                        ->setTo($add_client->getUser()->getEmail())
                        ->setBody("Proposer de payer l'abonnement, puis *lien pour valider ajouter le liene entre Coach/Client*. ")
                    ;

                    $mailer->send($message);
                    $manager->addRelation($coach, $add_client);
                    return $this->redirectToRoute('security_profil');
                    } else {
                        echo "<script>alert(\"Ce client a déjà un Coach (max : 1)\")</script>";
                    }
                }
            }

            $client = $Clientrepository->findOneBy(
                ['User' => $user]
                );


            return $this->render('security/profil.html.twig', [
                'form' => $form->createView(),
                'form1' => $form1->createView(),
                'Coach_' => $coach,
                'Client_' => $client,
            ]);
    }

    /**
    * @Route("/profil/edit", name="security_editprofil")
    */
    public function edit(Request $request, Manager $Lemanager, UserPasswordEncoderInterface $encoder)    : Response
    {


        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);

        $form = $this->createForm(UserType::class, $user);
        $form->remove('Iscoach');
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $Lemanager->editUser($user, $encoder);
                return $this->redirectToRoute('security_profil');
            }


        return $this->render('security/editprofil.html.twig', [
            'form' => $form->createView(),
            'user' => $user
        ]);
    }

    /**
    * @Route("/profil/delete", name="security_delUser")
    */
    public function delete_user(Request $request, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('VIEW', $user);

        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
        $Clientrepository = $this->getDoctrine()->getRepository(Client::class);
        if ($user->getIsCoach() == 1) {
            $coach = $Coachrepository->findOneBy([
                'User' => $user,
            ]);
            $manager->delUsercoach($user, $coach);
        } else {
            $client = $Clientrepository->findOneBy([
                'User' => $user,
            ]);
            $manager->delUserclient($user, $client);
            }

        $session = new Session();
        $session->invalidate();

            return $this->redirectToRoute('index');


    }

    /**
    * @Route("/profil/delete_relation/{int}", name="security_DeleRelation")
    */
    public function delete_relation(int $int, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);

        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
        $Clientrepository = $this->getDoctrine()->getRepository(Client::class);

        if ($user->getIsCoach() == 1) {
            $coach = $Coachrepository->findOneBy([
                'User' => $user,
            ]);
            $client = $Clientrepository->findOneBy([
                'id' => $int,
            ]);
        } else {
            $coach = $Coachrepository->findOneBy([
                'id' => $int,
            ]);
            $client = $Clientrepository->findOneBy([
                'User' => $user,
            ]);
        }
        $manager->deleteRelation($coach, $client);
        return $this->redirectToRoute('security_profil');
    }

    /**
     * @Route("/messages", name="security_messages")
     */
    public function messages(Request $request, Manager $Lemanager, UserPasswordEncoderInterface $encoder)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();

        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
        $Clientrepository = $this->getDoctrine()->getRepository(Client::class);

        if ($user->getIscoach() == 1){
            $coach = $Coachrepository->findBy(['User' => $user]);
            $client = $Clientrepository->findBy(['coach' => $coach]);
        } else {
            $client = $Clientrepository->findBy(['User' => $user]);
            $coach = $Coachrepository->findBy(['Clients' => $client]);
        }

        $this->denyAccessUnlessGranted('VIEW', $user);

        return $this->render('security/messages.html.twig', [
            'Coach_' => $coach,
            'Client_' => $client,
        ]);
    }

    /**
     * @Route("/calendrier", name="security_calendrier")
     */
    public function calendrier()
    {
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        $months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        $month = null;
        $year = null;

        if ($month === null || $month > 12 || $month < 1) {
            $month = intval(date('m'));
        }
        if ($year === null) {
            $year = intval(date('Y'));
        }

        $Month = new Month($year,$month);

        $date_start  =  new \DateTime("{$year}-{$month}-01");
        $start2 = $date_start ->format('N') === '1' ? $date_start : $Month->getStartingDay()->modify('last monday');
        $end = (clone $start2)->modify('+'.(6 + 7 * ($Month->getWeeks() -1)).'days');
        $Eventrepository = $this->getDoctrine()->getRepository(Event::class);
        $clientrepository = $this->getDoctrine()->getRepository(Client::class);
        if($user->getIscoach()==true){
            $events = $Eventrepository->findBy([
                'coach'=> $user->getCoach()
            ]);
        }else{
            $client = $clientrepository->findOneBy(['User'=>$user]);
            $events = $Eventrepository->findBy([
                'coach'=> $client->getCoach()
            ]);
        }


        $this->denyAccessUnlessGranted('VIEW', $user);
        return $this->render('security/calendrier.html.twig', [
            'month' => $month,
            'months' => $months,
            'year' => $year,
            'weeks'=>$Month->getWeeks(),
            'start_day'=> $Month->getStartingDay(),
            'events'=> $events,
            'days'=>$days,
            'start'=>$date_start,
            'start2'=>$start2,
            'start_clone'=>$date_start,
            'Month'=>$Month,
            'user'=>$user
        ]);
    }

    /**
     * @Route("/calendrier/{monthN}/{yearN}", name="security_calendrier_previous")
     * @param array $arr
     * @param $year
     * @return Response
     */
    public function calendrier_Prev(int $monthN, int $yearN)
    {
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        $months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        $month = $monthN;
        $year =  $yearN;
        if($month < 1){$month = 12;$year -=1;}


        if ($month === null || $month > 12 || $month < 1) {
            $month = intval(date('m'));
        }
        if ($year === null) {
            $year = intval(date('Y'));
        }

        $Month = new Month($year,$month);

        $date_start  =  new \DateTime("{$year}-{$month}-01");
        $start2 = $date_start ->format('N') === '1' ? $date_start : $Month->getStartingDay()->modify('last monday');
        $Eventrepository = $this->getDoctrine()->getRepository(Event::class);
        $events = $Eventrepository->findAll();
        $this->denyAccessUnlessGranted('VIEW', $user);
        return $this->render('security/calendrier.html.twig', [
            'month' => $month,
            'months' => $months,
            'year' => $year,
            'weeks'=>$Month->getWeeks(),
            'start_day'=> $Month->getStartingDay(),
            'days'=>$days,
            'start'=>$date_start,
            'start2'=>$start2,
            'start_clone'=>$date_start,
            'Month'=>$Month,
            'user'=>$user,
            'events'=>$events
        ]);
    }

    /**
     * @Route("/calendrier/{monthN}/{yearN}", name="security_calendrier_Nxt")
     * @param array $arr
     * @param $year
     * @return Response
     */
    public function calendrier_Next(int $monthN, int $yearN)
    {
        $user = $this->get('security.token_storage')->getToken()->getUser();

        $days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        $months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        $month = $monthN;
        $year =  $yearN;
        if($month < 1){
          $month = 12;$year -=1;
        }


        if ($month === null || $month > 12 || $month < 1) {
            $month = intval(date('m'));
        }
        if ($year === null) {
            $year = intval(date('Y'));
        }

        $Month = new Month($year,$month);

        $date_start  =  new \DateTime("{$year}-{$month}-01");
        $start2 = $date_start ->format('N') === '1' ? $date_start : $Month->getStartingDay()->modify('last monday');
        $Eventrepository = $this->getDoctrine()->getRepository(Event::class);
        $events = $Eventrepository->findAll();

        $this->denyAccessUnlessGranted('VIEW', $user);
        return $this->render('security/calendrier.html.twig', [
            'month' => $month,
            'months' => $months,
            'year' => $year,
            'weeks'=>$Month->getWeeks(),
            'start_day'=> $Month->getStartingDay(),
            'days'=>$days,
            'start'=>$date_start,
            'start2'=>$start2,
            'start_clone'=>$date_start,
            'Month'=>$Month,
            'user'=>$user,
            'events'=>$events
        ]);
    }


    /**
         * @Route("/registerEvent/{Date}", name="security_registration_event")
         */
        public function registrationEvent(Request $request, Manager $Lemanager,\DateTime $Date) {
            $user = $this->get('security.token_storage')->getToken()->getUser();
            $eventRepo =  $this->getDoctrine()->getRepository(Event::class);

            $event = new Event();
            $form = $this->createForm(EventType::class, $event);
            $form->remove('coach');
            $form->remove('client');
            $form->remove('date');
            $form->handleRequest($request);

            if($form->isSubmitted() && $form->isValid()) {
                $hourSt = $form->get('hourStart')->getData();
                $hourEd = $form->get('hourEnd')->getData();
                $bool = false;
                $event3 =  $eventRepo->findOneBy([
                    'date'=>$Date,
                    'hourEnd'=>$hourEd
                ]);

                $event2 =  $eventRepo->findOneBy([
                    'date'=>$Date,
                    'hourStart'=>$hourSt
                ]);

                //$date_actu  = $date = date('Y-m-d');
                $date_actu = date('Y-m-d');
                if(($event2 || $event3)) {
                    echo "<script>alert('Créneau indisponible !')</script>";
                }elseif ( $hourEd<$hourSt) {
                    echo "<script>alert(' Horaires incompatibles !')</script>";
                }elseif ($date_actu>$event->getDate()){
                    echo "<script>alert(' Date incompatible !')</script>";
                }else{
                    $Lemanager->addEvent($event, $user,$Date);
                    return $this->redirectToRoute('security_calendrier');
                }
            }
            return $this->render('security/EventRegister.html.twig', [
                'Date'=>$Date->format('d-m-Y'),
                'form' => $form->createView(),
            ]);
        }



    /**
     * @Route("/event/edit/{id}", name="security_edit_event")
     */
    public function EditEvent(Request $request, Manager $Lemanager,int $id) {
        $user = $this->get('security.token_storage')->getToken()->getUser();
        $Eventrepository = $this->getDoctrine()->getRepository(Event::class);
        $event = $Eventrepository->findOneBy([
            "id"=>$id,
        ]);
        $form = $this->createForm(EventType::class, $event);
        $form->remove('coach');
        $form->remove('client');


        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $Lemanager->EditEvent($event, $user);
            return $this->redirectToRoute('security_calendrier');
        }

        return $this->render('security/EventEdit.html.twig', [
            'form' => $form->createView(),
            'event'=>$event


        ]);


    }

        /**
         * @Route("/event/client/{id}", name="security_client_add_event")
         */
        public function validClientEvent(Request $request, Manager $Lemanager,int $id,\Swift_Mailer $mailer) {
            $user = $this->get('security.token_storage')->getToken()->getUser();

            $Eventrepository = $this->getDoctrine()->getRepository(Event::class);
            $event = $Eventrepository->findOneBy([
                "id"=>$id,
            ]);
            $clientRepo = $this->getDoctrine()->getRepository(Client::class);
            $client = $clientRepo->findOneBy([
                "User"=>$user->getId(),
            ]);
                $Lemanager->ValidEvent($event, $client);
                $message = (new \Swift_Message('Hello Email'))
                    ->setFrom('myecoach@service.com')
                    ->setTo($client->getCoach()->getUser()->getEmail())
                    ->setBody("Le créneau du ".$event->getDate()->format('d-m-Y')." :".$event->getHourStart()->format('H:i')." - ".$event->getHourEnd()->format('H:i')." a été choisi par : ".$client->getUser()->getUsername());
                        $mailer->send($message);
                return $this->redirectToRoute('security_calendrier');
        }

    /**
     * @Route("/event/delete/{id}", name="security_delete_event")
     */
    public function DeleteEvent(Manager $Lemanager,int $id) {
        $user = $this->get('security.token_storage')->getToken()->getUser();
        $Eventrepository = $this->getDoctrine()->getRepository(Event::class);
        $event = $Eventrepository->findOneBy([
            "id"=>$id,
        ]);
        $Lemanager->DeleteEvent($event);
        return $this->redirectToRoute('security_calendrier');
    }

    /**
     * @Route("/produits", name="security_produits")
     */
    public function produits(Request $request, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);

        $Prodrepository = $this->getDoctrine()->getRepository(Produits::class);
        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
        $Clientrepository = $this->getDoctrine()->getRepository(Client::class);


        $coach = $Coachrepository->findOneBy([
            'User' => $user,
        ]);

        $client = $Clientrepository->findOneBy([
            'User' => $user,
        ]);

        $Imarepository = $this->getDoctrine()->getRepository(Images::class);
        $produits = $Prodrepository->findBy(['Coach' => $coach]);
        $produit = new Produits();
        $form = $this->createForm(ProduitsType::class, $produit);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $image = $form->get('image')->getData();

            if (!empty($image)) {
                // On boucle sur les images
                // On génère un nouveau nom de fichier
                $fichier = md5(uniqid()).'.'.$image->guessExtension();

                // On copie le fichier dans le dossier uploads
                $image->move(
                    $this->getParameter('images_directory'),
                    $fichier
                );
            } else {
                $fichier = "";
            }

            // On crée l'image dans la base de données
            $img = new Images();
            $img->setName($fichier);
            $manager->addProduit($produit, $coach, $img);
            return $this->redirectToRoute('security_produits');
        }
        $images = $Imarepository->findAll();

        return $this->render('security/produits.html.twig', [
            'form' => $form->createView(),
            'produits' => $produits,
            'images' => $images,
            'client' => $client,
        ]);

    }

    /**
    * @Route("/produits/{int}/delete", name="security_Deleproduit")
    */
    public function delete_produit(int $int, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);

        $Produitrepository = $this->getDoctrine()->getRepository(Produits::class);
        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);

        $produit = $Produitrepository->findOneBy([
            'id' => $int,
        ]);


        // On récupère le nom de l'image
        $image = $produit->getImage();
        $nom = $image->getName();
        if ($nom != "") {
            // On génère un nouveau nom de fichier
            $manager->deleteProduit($produit);
            unlink($this->getParameter('images_directory').'/'.$nom);
            return $this->redirectToRoute('security_produits');
        } else {
            $manager->deleteProduit($produit);
            return $this->redirectToRoute('security_produits');
        }
    }

    /**
    * @Route("/produits/{int}/edit", name="security_Editproduit")
    */
    public function edit_produit(Request $request, Manager $manager, int $int)    : Response
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);
        $coach = $user->getId();

        $produit_edit = $this->getDoctrine()
                ->getRepository(Produits::class)
                ->find($int);

        $form = $this->createForm(ProduitsType::class, $produit_edit);
        $form->handleRequest($request);
        $ancienne_image = $produit_edit->getImage();
        $nom = $ancienne_image->getName();
        $Prodrepository = $this->getDoctrine()->getRepository(Produits::class);
        $produits = $Prodrepository->findBy(['Coach' => $coach]);

        if($form->isSubmitted() && $form->isValid()) {
            $image = $form->get('image')->getData();

            if (!empty($image)) {
                // On boucle sur les images
                if ($nom != "") {
                    unlink($this->getParameter('images_directory').'/'.$nom);
                    // On génère un nouveau nom de fichier
                    $fichier = md5(uniqid()).'.'.$image->guessExtension();

                    // On copie le fichier dans le dossier uploads
                    $image->move(
                        $this->getParameter('images_directory'),
                        $fichier
                    );
                    $manager->editProduit($produit_edit, $ancienne_image, $fichier);
                    return $this->redirectToRoute('security_produits');
                } else {
                    // On génère un nouveau nom de fichier
                    $fichier = md5(uniqid()).'.'.$image->guessExtension();

                    // On copie le fichier dans le dossier uploads
                    $image->move(
                        $this->getParameter('images_directory'),
                        $fichier
                    );
                    $manager->editProduit($produit_edit, $ancienne_image, $fichier);
                    return $this->redirectToRoute('security_produits');
                }
            } else {
                if (!empty($nom)) {
                    unlink($this->getParameter('images_directory').'/'.$nom);
                    $fichier = "";
                    $manager->editProduit($produit_edit, $ancienne_image, $fichier);
                    return $this->redirectToRoute('security_produits');
                } else {
                    $fichier = "";

                    return $this->redirectToRoute('security_produits');
                }
            }

            // On crée l'image dans la base de données

        }

        return $this->render('security/editproduit.html.twig', [
            'form' => $form->createView(),
            'nom' => $nom,
            'produits' => $produits,
            ]);
    }

    /**
     * @Route("/notes", name="security_notes")
     */
    public function notes(Request $request, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);

        $Noterepository = $this->getDoctrine()->getRepository(Notes::class);
        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
        $Clientrepository = $this->getDoctrine()->getRepository(Client::class);


        $coach = $Coachrepository->findOneBy([
            'User' => $user,
        ]);

        $client = $Clientrepository->findOneBy([
            'User' => $user,
        ]);

        $notes = $Noterepository->findBy(['Coach' => $coach]);
        $note = new Notes();
        $form = $this->createForm(NotesType::class, $note);
        $form->remove('Coach');
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->addNote($note, $coach);
            return $this->redirectToRoute('security_notes');
        }

        return $this->render('security/notes.html.twig', [
            'form' => $form->createView(),
            'notes' => $notes,
            'client' => $client,
        ]);

    }

    /**
    * @Route("/notes/{int}/delete", name="security_Delenotes")
    */
    public function delete_note(int $int, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);

        $Noterepository = $this->getDoctrine()->getRepository(Notes::class);

        $note = $Noterepository->findOneBy([
            'id' => $int,
        ]);
        $manager->deleteNote($note);
        return $this->redirectToRoute('security_notes');
    }

    /**
    * @Route("/notes/{int}/edit", name="security_Editnotes")
    */
    public function edit_note(Request $request, Manager $manager, int $int)    : Response
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);

        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);

        $coach = $Coachrepository->findBy([
            'User' => $user,
        ]);

        $note_edit = $this->getDoctrine()
                ->getRepository(Notes::class)
                ->find($int);

        $form = $this->createForm(NotesType::class, $note_edit);
        $form->remove('Coach');
        $form->handleRequest($request);
        $Noterepository = $this->getDoctrine()->getRepository(Notes::class);
        $notes = $Noterepository->findBy(['Coach' => $coach]);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->editNote($note_edit);
            return $this->redirectToRoute('security_notes');
        }

        return $this->render('security/editnote.html.twig', [
            'form' => $form->createView(),
            'notes' => $notes,
            ]);
    }

}
