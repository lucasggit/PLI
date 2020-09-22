<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ConfirmMailRepository")
 */
class ConfirmMail
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isConfirm;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $token;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\User", mappedBy="ConfirmMail", cascade={"persist", "remove"})
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIsConfirm(): ?bool
    {
        return $this->isConfirm;
    }

    public function setIsConfirm(bool $isConfirm): self
    {
        $this->isConfirm = $isConfirm;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        // set (or unset) the owning side of the relation if necessary
        $newConfirmMail = null === $user ? null : $this;
        if ($user->getConfirmMail() !== $newConfirmMail) {
            $user->setConfirmMail($newConfirmMail);
        }

        return $this;
    }

}
