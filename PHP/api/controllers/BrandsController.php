<?php

namespace App\Controllers;

use Core\Controller;
use App\Models\Brands;

class BrandsController extends Controller
{
    public function __construct()
    {
        $this->model = new Brands();
    }

    public function get()
    {
        $jsonData = json_encode($this->model->getFullList());
        echo $jsonData;
    }
}
