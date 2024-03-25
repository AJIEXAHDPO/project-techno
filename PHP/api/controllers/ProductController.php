<?php

namespace App\Controllers;

use Core\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function __construct($uriPath, $callback, $uriQuery)
    {
        if (!array_key_exists('id', $uriQuery)) exit("No id in query");
        $id = $uriQuery["id"][0];
        $this->model = new Product($id);
        $this->callback = $callback;
    }

    public function get()
    {
        $callback = $this->callback;
        $jsonData = json_encode($this->model->$callback());
        echo $jsonData;
    }
}
