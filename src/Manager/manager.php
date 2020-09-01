<?php
namespace App\Manager;

use App\Entity\User;
use App\Entity\Produits;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class manager extends AbstractController
{

    public function addUser(User $user,UserPasswordEncoderInterface $encoder) {

        $manager = $this->getDoctrine()->getManager();
        if($user->getCoach() == 1) {

        }
        $hash = $encoder->encodePassword($user, $user->getPassword());
        $user->setPassword($hash);
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

    public function addProduit(Produits $produit, User $user) {

        $manager = $this->getDoctrine()->getManager();
        $produit->setCoach($user);
        $produit->setCreatedAt(new \DateTime());
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();

        $manager->persist($produit);
        $manager->flush();
}


}



