<?php

use api\Database;
use api\Config\db;

class Catalog_category {
    private $name;

    public function __construct(String $category = "*") {
        $categories = $this::receiveCategories();

        foreach ($categories as $category) {
            if ($category===$this->name) ;
        } exit("Creation catalog failed: no such category in DB");
    }

    public function getFullList() : Array {
        $result = db->query(
            "SELECT product.name, 
                    product.price, 
                    product.image 
               FROM product 
         INNER JOIN category ON category_id = category.id
              WHERE category.name = '{$this->name}'");
        
        $rows = array_map(fn($row)=> db->fetch_assoc($row), $result);
        return $rows;
    }



    public static function receiveCategories() : Array {
        $result = db->query("SELECT `name` FROM category;");
        $rows = array_map(fn($row)=> db->fetch_assoc($row), $result);
        return $rows;
    }
}