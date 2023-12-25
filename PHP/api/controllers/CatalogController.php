<?php
namespace App\Controllers;
use App\Database\Connection;
use App\Models\Category;

class CatalogController {
    private $pdo;
    private $category;
    public function __construct() {
        $this->pdo = Connection::get()->connect();
        $this->category = new Category("laptops", $this->pdo);
    }

    public function get () {
        $jsonData = json_encode($this->category->getFullList());
        echo $jsonData;
    }

}
