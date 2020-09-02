<?php

namespace App\Controller;

use App\Entity\Clientele;
use App\Entity\User;
use App\Entity\Produits;
use App\Form\UserType;
use App\Manager\Manager;
use App\Form\ProduitsType;
use App\Form\ClienteleType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Intl\Scripts;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class SecurityController extends AbstractController
{
    /**
     * @Route("/register", name="security_registration")
     */
    public function registration(Request $request, Manager $Lemanager, UserPasswordEncoderInterface $encoder) {

        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->remove('link');
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $Lemanager->addUser($user, $encoder);
                return $this->redirectToRoute('security_login');
        }

        return $this->render('security/registration.html.twig', [
            'form' => $form->createView()
        ]);
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
     * @Route("/profil", name="security_profil")
     */
    public function profil(Request $request, Manager $manager): Response 
    {
            $user=$this->get('security.token_storage')->getToken()->getUser();
            $this->denyAccessUnlessGranted('VIEW', $user);
        
            $repository = $this->getDoctrine()->getRepository(User::class);
            $Clientrepository = $this->getDoctrine()->getRepository(Clientele::class);
            $clients = $Clientrepository->findBy(
                ['Coach' => $user]
            );
            $Thecoach = $Clientrepository->findBy(
                ['Client' => $user]
            );
            $users = $repository->findAll();

            $clientele = new Clientele;
            $defaultData = ['message' => 'Clef de lien...'];
            $form = $this->createFormBuilder($defaultData)
                        ->add('Client', TextType::class)
                        ->getForm();

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                // data is an array with "name", "email", and "message" keys
                $data = $form->getData();
                $client = $repository->findOneBy(['link' => $data]);
                if (is_null($client)) 
                {
                    echo "<script>alert(\"Client introuvable\")</script>";
                } else {
                    $Theclient = $Clientrepository->findOneBy([
                        'Client' => $client->getId(),
                    ]);
                    if (is_null($Theclient))
                    {
                        $manager->addClientele($clientele, $client, $user);
                        return $this->redirectToRoute('security_profil');
                    } else {
                        echo "<script>alert(\"Ce client a déjà un Coach (max : 1)\")</script>";
                    }
                }
            }

            return $this->render('security/profil.html.twig', [
                'form' => $form->createView(),
                'clients'=> $clients,
                'users' => $users,
                'Thecoach' => $Thecoach,
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
        $form->remove('link');
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
     * @Route("/messages", name="security_messages")
     */
    public function messages(Request $request, Manager $Lemanager, UserPasswordEncoderInterface $encoder)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('VIEW', $user);
        
        return $this->render('security/messages.html.twig');
    }
    
    /**
     * @Route("/calendrier", name="security_calendrier")
     */
    public function calendrier()
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('VIEW', $user);
        return $this->render('security/calendrier.html.twig');
    }

    /**
     * @Route("/produits", name="security_produits")
     */
    public function produits(Request $request, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);
        $Prodrepository = $this->getDoctrine()->getRepository(Produits::class);
        $coach = $user->getId();
        
        $Clientrepository = $this->getDoctrine()->getRepository(Clientele::class);
        $monCoach = $Clientrepository->findOneBy(
            ['Client' => $user]
        );
        if (empty($monCoach)){
            $Produits_client = "";
        } else {
            $Produits_client = $Prodrepository->findBy(['Coach' => $monCoach->getCoach()]);
        }
        
        $produits = $Prodrepository->findBy(['Coach' => $coach]);
        $produit = new Produits();
        $form = $this->createForm(ProduitsType::class, $produit);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $manager->addProduit($produit, $user);
            return $this->redirectToRoute('security_produits');
        }

        return $this->render('security/produits.html.twig', [
            'form' => $form->createView(),
            'produits' => $produits,
            'Produits_client' => $Produits_client,
        ]);
        
    }
}
