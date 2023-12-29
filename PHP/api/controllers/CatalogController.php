<?php

namespace App\Controllers;

use Core\Controller;
use App\Models\Category;

class CatalogController extends Controller
{
    public function __construct()
    {
        $this->model = new Category("laptops");
    }

    public function get()
    {
        $jsonData = json_encode($this->model->getFullList());
        echo $jsonData;
    }
}
