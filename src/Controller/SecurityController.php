<?php

namespace App\Controller;

use App\Entity\Clientele;
use App\Entity\User;
use App\Entity\Produits;
use App\Entity\Images;
use App\Form\UserType;
use App\Manager\Manager;
use App\Form\ProduitsType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
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
    * @Route("/profil/delete_clientele/{int}", name="security_Deleclientele")
    */
    public function delete_clientele(int $int, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);
        
        $Clientrepository = $this->getDoctrine()->getRepository(Clientele::class);
        $id = $user->getId();

        $Userrepository = $this->getDoctrine()->getRepository(User::class);
        $User = $Userrepository->findOneBy(['id' => $int]);
        if ($user->getIsCoach() == 1) {
            $clientele = $Clientrepository->findOneBy([
                'Coach' => $id,
                'Client' => $User,
            ]);
        } else {
            $clientele = $Clientrepository->findOneBy([
                'Coach' => $User,
                'Client' => $id,
            ]);
        }
        $manager->deleteClientele($clientele);
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
            $manager->addProduit($produit, $user, $img);
            return $this->redirectToRoute('security_produits');
        }
        $images = $Imarepository->findAll();

        return $this->render('security/produits.html.twig', [
            'form' => $form->createView(),
            'produits' => $produits,
            'images' => $images,
            'Produits_client' => $Produits_client,
        ]);
        
    }

    /**
    * @Route("/produits/{int}/delete", name="security_Deleproduit")
    */
    public function delete_produit(int $int, Manager $manager)
    {
        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);
        $produit = $this->getDoctrine()
                ->getRepository(Produits::class)
                ->find($int);
        
        // On récupère le nom de l'image
        $image = $produit->getImage();
        $nom = $image->getName();
        if ($nom != "") {
            unlink($this->getParameter('images_directory').'/'.$nom);
            // On génère un nouveau nom de fichier
            $manager->deleteProduit($produit);
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
        

        return $this->render('security/notes.html.twig', [
            
        ]);
        
    }

}
