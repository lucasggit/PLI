<?php
namespace App\Date;

class Month {
    public $days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
    private $months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre' ];
    public $month;
    public $year;
    /**
     * Month constructor.
     * @param int $month 1-12
     * @param int $year
     */
    public function __construct(?int $year = null , ?int $month = null)
    {
        if($month === null || $month > 12 || $month < 1){
            $month = intval(date('m'));
        }
        if($year === null ){
            $year = intval(date('Y'));
        }
        $this->month =$month;
        $this->year = $year;
    }

    public function toString(): String {
        return $this->months[$this->month-1].' '. $this->year;

    }
    /**
     * renvoie le premier jour du mois
     * @return \DateTime
     */
    public function  getStartingDay(): \DateTime{
        return new \DateTime("{$this->year}-{$this->month}-01");
    }
    public function getWeeks (): int{

        $start = $this->getStartingDay();
        $end = (clone $start)->modify('+1 month -1 day');
        $startWeek = intval($start->format('W'));
        $weeks = intval($end->format('W')) - intval($start->format('W')) + 1;
        $endWeek = intval($end->format('W'));
        if ($endWeek === 1 ){
            $endWeek = intval((clone $end)->modify('- 7 days')->format('W'))+1;
        }
        $weeks = $endWeek-$startWeek;
        if($weeks < 0){
            $weeks = intval($end->format('W'));
        }
        return $weeks;
    }

    /**
     * @param \DateTime $date
     * @return bool
     */
    public function withInMonth(\DateTime $date): bool{
        return $this->getStartingDay()->format('Y-m') === $date->format('Y-m');
    }

    public function nextMonth(): Month {
        $month = $this ->month + 1 ;
        $year = $this->year;
        if($month > 12 ){
            $month = 1;
            $year += 1;
        }

        return new Month($year,$month);
    }
    public function previousMonth(): Month {
        $month = $this ->month - 1 ;
        $year = $this->year;
        if($month < 1 ){
            $month = 12;
            $year -= 1;
        }

        return new Month($year,$month);

    }


}
