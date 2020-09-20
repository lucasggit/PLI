<?php

namespace App\Controller;

use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Cookie;


class IndexController extends AbstractController
{
    /**
    * @Route("/cookies/", name="cookies")
    */
    public function index()
    {
        $username = $this->getUser()->getUsername();
        $token = (new Builder())
              ->withClaim('mercure', ['subscribe' => [sprintf("/%s", $username)]])
              ->getToken(
                  new Sha256(),
                  new Key($this->getParameter('mercure_secret_key'))
                )
              ;

        $response = $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
        $response->headers->setCookie(
            new Cookie(
                'mercureAuthorization', //name
                $token,
                (new \DateTime())
                ->add (new \DateInterval('PT2H')), //expiration date (Period time of 2H)
                '/.well-known/mercure', //path
                null, //domain
                false, //secure
                true, //httpOnly
                false, //raw
                'strict' //sameSite
              )
          );

          return $response;
    }
}
