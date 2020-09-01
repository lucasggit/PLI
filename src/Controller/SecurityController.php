<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Messages;
use App\Form\UserType;
use App\Manager\manager;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class SecurityController extends AbstractController
{
    /**
     * @Route("/register", name="security_registration")
     */
    public function registration(Request $request, manager $Lemanager, UserPasswordEncoderInterface $encoder) {

        $user = new User();
        $form = $this->createForm(UserType::class, $user);
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
    public function profil(): Response 
    {
            $user=$this->get('security.token_storage')->getToken()->getUser();
            $this->denyAccessUnlessGranted('VIEW', $user);
            return $this->render('security/profil.html.twig');
    }

    /**
    * @Route("/profil/edit", name="security_editprofil")
    */
    public function edit(Request $request, manager $Lemanager, UserPasswordEncoderInterface $encoder)    : Response
    {
        

        $user=$this->get('security.token_storage')->getToken()->getUser();
        $this->denyAccessUnlessGranted('EDIT', $user);

        $form = $this->createForm(UserType::class, $user);
        $form->remove('coach');
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
    public function messages(Request $request, manager $Lemanager, UserPasswordEncoderInterface $encoder)
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
    public function produits()
    {
        return $this->render('security/produits.html.twig');
    }
}
