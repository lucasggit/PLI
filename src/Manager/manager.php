<?php
namespace App\Manager;

use App\Entity\User;
use App\Entity\Produits;
use App\Entity\Clientele;
use App\Entity\Images;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class Manager extends AbstractController
{

    public function addUser(User $user,UserPasswordEncoderInterface $encoder) {

        $manager = $this->getDoctrine()->getManager();
        if($user->getIsCoach() == 1) {

        }
        $hash = $encoder->encodePassword($user, $user->getPassword());
        $user->setPassword($hash);
        $length = 16;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
        $user->setLink($randomString);
        $user->setCreatedAt(new \DateTime());
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();

        $manager->persist($user);
        $manager->flush();
    }


    public function editUser(User $user, UserPasswordEncoderInterface $encoder)
    {
            $hash = $encoder->encodePassword($user, $user->getPassword());
            $user->setPassword($hash);
                $this->getDoctrine()->getManager()->flush();
    }

    public function deleteUser(User $user)
    {
        $this->objectManager->remove($user);
        $this->objectManager->flush();
    }

    public function addProduit(Produits $Produits, User $user, Images $image) {

        $manager = $this->getDoctrine()->getManager();
        $Produits->setCoach($manager->getRepository(User::class)->find($this->getUser()));
        $Produits->setImage($image);
        $Produits->setCreatedAt(new \DateTime());
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();

        $manager->persist($Produits);
        $manager->flush();
    }

    public function deleteProduit(Produits $produit) {

        $manager = $this->getDoctrine()->getManager();
        $manager->remove($produit);
        $manager->flush();

    }

    public function editProduit(Produits $produit, Images $image, string $fichier)
    {
        $image->setName($fichier);
        $produit->setCreatedAt(new \DateTime());
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();
        $this->getDoctrine()->getManager()->flush();
    }

    public function addClientele(Clientele $Clientele, User $client, User $user) {

        $manager = $this->getDoctrine()->getManager();
        $Clientele->setClient($client->getId());
        $Clientele->setCoach($user->getId());

        $manager->persist($Clientele);
        $manager->flush();
    }

    public function deleteClientele(Clientele $Clientele) {

        $manager = $this->getDoctrine()->getManager();
        $manager->remove($Clientele);
        $manager->flush();

    }

}



