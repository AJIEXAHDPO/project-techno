<?php

namespace App\Controllers;

use App\Models\Product;

class ProductController {
    private $product;
    public function __construct($query)
    {
        $id = $query["id"];
        $this->product = new Product($id);
    }

    public function get() {
        $jsonData = json_encode($this->product->getFullInfo());
        echo $jsonData;
    }
}