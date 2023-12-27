<?php

namespace App\Controllers;
use Core\Controller;
use App\Models\Banners;

class BannersController
{
    private $banners;
    public function __construct()
    {
        $this->banners = new Banners();
    }

    public function get ()
    {
        $jsonData = json_encode($this->banners->getList(4));
        echo $jsonData;
    }
}