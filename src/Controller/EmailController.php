<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class EmailController extends AbstractController
{
    /**
     * @Route("/email", name="email")
     */
    public function index()
    {
        return $this->render('email/Link.html.twig', [
            'controller_name' => 'EmailController',
        ]);
    }
}
