<?php

namespace App\Controllers;

use Core\Controller;
use App\Models\Product;

class DiscountsController extends Controller
{
    public function __construct()
    {
        $this->model= new Product(1);
    }

    public function get()
    {
        $jsonData = json_encode($this->model->getDiscounts(3));
        echo $jsonData;
    }
}
