<?php

namespace App\Models;
use Core\Model;
use PDO;

class Category extends Model
{

    private $name;

    public function __construct(String $name = 'laptops')
    {
        $this->connectDB();
        if ($this->categoryExists($name))
            $this->name = $name;
        else exit("Catalog creation failed: no such category in DB\n");
    }

    public function getFullList(): array
    {
        $result = $this->db->query(
            "SELECT product.id,
                    product.name, 
                    product.price, 
                    product.img 
               FROM product 
         INNER JOIN category ON category_id = category.id
              WHERE category.name = '{$this->name}'"
        )->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    /*public function getSearchProps() : Array 
    {
        $result = 
        return $result;
    }
    
    public function search() : Array 
    {
        
    }*/

    public function receiveCategories(): array
    {
        $result = $this->db->query("SELECT `name` FROM category;")->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    private function categoryExists($name): bool
    {
        $categories = $this->receiveCategories();
        $result = false;
        foreach ($categories as $category) {
            if ($category['name'] === $name) $result = true;
        }
        return $result;
    }
}
