<?php

namespace App\Controllers;

use App\Models\Brands;

class BrandsController
{
    private $brands;
    public function __construct()
    {
        $this->brands = new Brands();
    }

    public function get()
    {
        $jsonData = json_encode($this->brands->getFullList());
        echo $jsonData;
    }
}
