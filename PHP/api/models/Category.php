<?php
namespace app\Models;

class Category {
    private $name;
    private $db;

    public function __construct(String $name = "*", $db) {
        $this->db = $db;
        $categories = $this->receiveCategories();

        if (array_search($name, $categories) !== false)
            $this->name = $name;
        else exit("Creation catalog failed: no such category in DB");
    }

    public function getFullList() : Array {
        $result = $this->db->query(
            "SELECT product.name, 
                    product.price, 
                    product.image 
               FROM product 
         INNER JOIN category ON category_id = category.id
              WHERE category.name = '{$this->name}'");
        
        $rows = array_map(fn($row)=> $this->db->fetch_assoc($row), $result);
        return $rows;
    }

    /*public function getSearchProps() : Array {
        
        $result = 
        return $result;
    }*/

    public function receiveCategories() : Array {
        $result = $this->db->query("SELECT `name` FROM category;");
        $rows = array_map(fn($row)=> $this->db->fetch_assoc($row), $result);
        return $rows;
    }
}