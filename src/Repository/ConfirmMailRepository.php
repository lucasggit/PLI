<?php

namespace App\Repository;

use App\Entity\ConfirmMail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ConfirmMail|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConfirmMail|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConfirmMail[]    findAll()
 * @method ConfirmMail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConfirmMailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConfirmMail::class);
    }

    // /**
    //  * @return ConfirmMail[] Returns an array of ConfirmMail objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ConfirmMail
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
