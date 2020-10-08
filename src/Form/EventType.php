<?php

namespace App\Form;

use App\Entity\Event;

use DateTime;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;

use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('description')
            ->add('date',DateTimeType::class, [
                'input'  => 'datetime',
                'widget' => 'choice',
            ])
            ->add('hourStart',TimeType::class, [
                'input'  => 'datetime',
                'widget' => 'choice',
                'hours' =>  range(8,22),])
            ->add('hourEnd',TimeType::class, [
                'input'  => 'datetime',
                'widget' => 'choice',
                'hours' =>  range(8,22),])
                // this is actually the default format for single_text)

            ->add('client')
            ->add('coach')
        ;
    }

    //Recuperezr la date par get et afficher la date audessus de debut et insert la value (persist)

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}
