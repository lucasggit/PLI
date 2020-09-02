<?php

namespace App\Repository;

use App\Entity\Clientele;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Clientele|null find($id, $lockMode = null, $lockVersion = null)
 * @method Clientele|null findOneBy(array $criteria, array $orderBy = null)
 * @method Clientele[]    findAll()
 * @method Clientele[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClienteleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Clientele::class);
    }

    // /**
    //  * @return Clientele[] Returns an array of Clientele objects
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
    public function findOneBySomeField($value): ?Clientele
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
