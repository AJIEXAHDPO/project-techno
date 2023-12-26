<?php

namespace App\Controllers;

use App\Models\Category;

class CatalogController
{
    private $category;
    public function __construct()
    {
        $this->category = new Category("laptops");
    }

    public function get()
    {
        $jsonData = json_encode($this->category->getFullList());
        echo $jsonData;
    }
}
