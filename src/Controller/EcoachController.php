<?php

namespace App\Controller;


use App\Entity\Client;
use App\Entity\Coach;
use App\Entity\User;
use App\Entity\Produits;
use App\Entity\Images;
use App\Entity\Notes;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class EcoachController extends AbstractController
{

    
    /**
     * @Route("/support", name="support")
     */
    public function support(\Swift_Mailer $mailer)
    {
        $form = $this->createFormBuilder()
            ->getForm();

        if ($form->isSubmitted() && $form->isValid()) {
            // data is an array with "name", "email", and "message" keys
            $mail = $form->getData('mail');
            $sujet = $form->getData('sujet');
            $text = $form->getData('message');
            
            $message = (new \Swift_Message('Hello Email'))
                ->setFrom('myecoach@service.com')
                ->setTo('myecoachservice@gmail.com')
                ->setBody("Mail : $mail / Sujet : $sujet / Message : $text");
            
            $mailer->send($message);
            return $this->redirectToRoute('support');
            }
        
            return $this->render('ecoach/support.html.twig', [
            'controller_name' => 'EcoachController',
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/aide", name="ecoach_aide")
     */
    public function aide()
    {
        return $this->render('ecoach/aide.html.twig', [
            'controller_name' => 'EcoachController',
        ]);
    }
    
    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->render('ecoach/contact.html.twig', [
            'controller_name' => 'EcoachController',
        ]);
    }
    
    /**
     * @Route("/informations", name="informations")
     */
    public function informations()
    {
        return $this->render('ecoach/informations.html.twig', [
            'controller_name' => 'EcoachController',
        ]);
    }
}
