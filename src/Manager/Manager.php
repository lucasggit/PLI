<?php
namespace App\Manager;

use App\Entity\Client;
use App\Entity\Event;
use App\Entity\User;
use App\Entity\Produits;
use App\Entity\Clientele;
use App\Entity\Coach;
use App\Entity\ConfirmMail;
use App\Entity\Images;
use App\Entity\Notes;
use Symfony\Component\Validator\Constraints\DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class Manager extends AbstractController
{

    public function addUser(User $user,UserPasswordEncoderInterface $encoder, ConfirmMail $confirmMail) {

        $manager = $this->getDoctrine()->getManager();
        $hash = $encoder->encodePassword($user, $user->getPassword());
        $user->setPassword($hash);
        $user->setCreatedAt(new \DateTime());
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();
        $confirmMail->setUser($user);
        $confirmMail->setIsConfirm(false);
        $length = 6;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
        $confirmMail->setToken($randomString);
        

        $manager->persist($user);
        $manager->persist($confirmMail);
        $manager->flush();
    }
    public function addEvent(Event $event,User $user, \DateTime $Date) {

        $manager = $this->getDoctrine()->getManager();
        $event->setDate($Date);
        $event->setCoach($user->getcoach());
        $event->setClient(null);
        $manager->persist($event);
        $manager->flush();
    }
    public function EditEvent(Event $event,User $user) {
        $manager = $this->getDoctrine()->getManager();
        $manager->persist($event);
        $manager->flush();
    }
    public function DeleteEvent(Event $event)
    {
        $manager = $this->getDoctrine()->getManager();
        $manager->remove($event);
        $manager->flush();

    }

    public function addCoach(Coach $coach, User $user) {

        $manager = $this->getDoctrine()->getManager();
        $coach->setUser($user);
        $manager->persist($coach);
        $manager->flush();
    }

    public function addClient(Client $client, User $user) {

        $manager = $this->getDoctrine()->getManager();
        $client->setUser($user);
        $length = 16;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
        $client->setLink($randomString);
        $manager->persist($client);
        $manager->flush();
    }


    public function editUser(User $user, UserPasswordEncoderInterface $encoder)
    {
            $hash = $encoder->encodePassword($user, $user->getPassword());
            $user->setPassword($hash);
                $this->getDoctrine()->getManager()->flush();
    }

    public function delUserclient(User $user, Client $client)
    {
        $manager = $this->getDoctrine()->getManager();
        $manager->remove($client);
        $manager->remove($user);
        $manager->flush();
    }

    public function delUsercoach(User $user, Coach $coach)
    {
        $manager = $this->getDoctrine()->getManager();
        $clients = $coach->getClients();
        $client = "";
        foreach ($clients as $client): 
            $coach->removeClient($client);
            $manager->flush();
        endforeach;
        $manager->remove($coach);
        $manager->remove($user);
        $manager->flush();
    }

    public function editUserConf(User $user, ConfirmMail $ConfirmMail)
    {
            $user->setConfirmMail($ConfirmMail);
            $this->getDoctrine()->getManager()->flush();
    }

    public function addProduit(Produits $Produits, Coach $coach, Images $image) {

        $manager = $this->getDoctrine()->getManager();
        $Produits->setCoach($coach);
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

    public function addRelation(Coach $coach, Client $client) {

        $manager = $this->getDoctrine()->getManager();
        $coach->addClient($client);
        $manager->persist($coach);
        $manager->flush();
    }

    public function deleteRelation(Coach $coach, Client $client) {

        $manager = $this->getDoctrine()->getManager();
        $coach->removeClient($client);
        $manager->flush();

    }

    public function addNote(Notes $notes, Coach $coach) {

        $manager = $this->getDoctrine()->getManager();
        $notes->setCoach($coach);
        $notes->setCreatedAt(new \DateTime());
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();

        $manager->persist($notes);
        $manager->flush();
    }

    public function deleteNote(Notes $note) {

        $manager = $this->getDoctrine()->getManager();
        $manager->remove($note);
        $manager->flush();

    }

    public function editNote(Notes $note)
    {
        $note->setCreatedAt(new \DateTime());
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();
        $this->getDoctrine()->getManager()->flush();
    }

    public function addConfirmMail(ConfirmMail $ConfirmMail, User $user) {

        $manager = $this->getDoctrine()->getManager();
        $ConfirmMail->setUser($user);
        $ConfirmMail->setIsConfirm(false);
        $length = 6;
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
        $ConfirmMail->setToken($randomString);
        $manager->persist($ConfirmMail);
        $manager->flush();
    }

    public function editConfMail(ConfirmMail $ConfirmMail) {

        $ConfirmMail->setIsConfirm(true);
        $this->getDoctrine()->getManager()->flush();
    }

}



