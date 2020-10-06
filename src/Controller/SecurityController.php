<?php

namespace App\Controller;

use App\Entity\Client;
use App\Entity\Coach;
use App\Entity\ConfirmMail;
use App\Entity\User;
use App\Entity\Produits;
use App\Entity\Images;
use App\Entity\Notes;
use App\Form\NotesType;
use App\Form\UserType;
use App\Manager\Manager;
use App\Form\ProduitsType;
use App\Repository\UserRepository;
use phpDocumentor\Reflection\Types\Integer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Constraints\IsFalse;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mailer\MailerInterface;


class SecurityController extends AbstractController
{

    /**
     * @Route("/", name="index")
     */
    public function index()
    {      
        $user = $this->get('security.token_storage')->getToken()->getUser();
        
        if ($user == "anon."){
            $user = null;
            $coach = null;
            $client = null;
            $produits = null;
        }else{
        $Prodrepository = $this->getDoctrine()->getRepository(Produits::class);
        $Coachrepository = $this->getDoctrine()->getRepository(Coach::class);
        $Clientrepository = $this->getDoctrine()->getRepository(Client::class);
        
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
        ]);
    }


    /**
     * @Route("/register", name="security_registration")
     */
    public function registration(Request $request, Manager $Lemanager, UserPasswordEncoderInterface $encoder, \Swift_Mailer $mailer) {

        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $iscoach = $form->get('Iscoach')->getData();
            
            if($iscoach == true) {
                $coach = new Coach;
                $Lemanager->addCoach($coach, $user);
            } else {
                $client = new Client;
                $Lemanager->addClient($client, $user);
            }
            $ConfirmMail = new ConfirmMail;
            $Lemanager->addUser($user, $encoder, $ConfirmMail);
            $Lemanager->addConfirmMail($ConfirmMail, $user);
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
                        ->setTo('clientx0x0@gmail.com')
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
