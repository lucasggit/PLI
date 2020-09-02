<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class EcoachController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return $this->render('ecoach/index.html.twig', [
            'controller_name' => 'EcoachController',
        ]);
    }

    
    /**
     * @Route("/support", name="support")
     */
    public function support()
    {
        return $this->render('ecoach/support.html.twig', [
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
