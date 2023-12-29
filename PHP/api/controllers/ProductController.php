<?php

namespace App\Controllers;

use Core\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function __construct($query)
    {
        if (!array_key_exists('id', $query)) exit("No id in query");
        $id = $query["id"];
        $this->model = new Product($id);
    }

    public function get()
    {
        $jsonData = json_encode($this->model->getFullInfo());
        echo $jsonData;
    }
}
