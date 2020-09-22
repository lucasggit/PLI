<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(
 * fields={"email"},
 * message="L'email est déja utilisé !"
 * )
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Email()
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(min="8", minMessage="votre mot de passe 
     * doit avoir minimum 8 caracères")
     * @Assert\EqualTo(propertyPath="confirm_password", message="Vos mots de passe ne sont pas identiques")
     */
    private $password;

    /**
     * @Assert\EqualTo(propertyPath="password", message="Vos mots de passe ne sont pas identiques")
     */
    public $confirm_password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $username;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Coach", mappedBy="User", cascade={"persist", "remove"})
     */
    private $coach;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Iscoach;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\ConfirmMail", inversedBy="user", cascade={"persist", "remove"})
     */
    private $ConfirmMail;

    public function __construct()
    {
        $this->notes = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function eraseCredentials()
    {
        
    }

    public function getSalt()
    {
        
    }

    public function getRoles()
    {
        return ['ROLE_USER'];
    }

    public function __toString()
    {
        return $this->username;
    }

    public function getcoach(): ?Coach
    {
        return $this->coach;
    }

    public function setcoach(?Coach $coach): self
    {
        $this->coach = $coach;

        // set (or unset) the owning side of the relation if necessary
        $newUser = null === $coach ? null : $this;
        if ($coach->getUser() !== $newUser) {
            $coach->setUser($newUser);
        }

        return $this;
    }

    public function getIscoach(): ?bool
    {
        return $this->Iscoach;
    }

    public function setIscoach(bool $Iscoach): self
    {
        $this->Iscoach = $Iscoach;

        return $this;
    }

    public function getConfirmMail(): ?ConfirmMail
    {
        return $this->ConfirmMail;
    }

    public function setConfirmMail(?ConfirmMail $ConfirmMail): self
    {
        $this->ConfirmMail = $ConfirmMail;

        return $this;
    }

}
