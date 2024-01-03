<?php

namespace App\Models;

use Core\Model;

class Category extends Model
{

    private $tableName;

    public function __construct(String $tableName = 'laptops')
    {
        $this->db = static::connectDB();
        if ($this->categoryExists($tableName))
            $this->tableName = $tableName;
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
              WHERE category.TableName = '{$this->tableName}'"
        )->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }

    private function receiveCategories(): array
    {
        $result = $this->db->query("SELECT `TableName` FROM category;")->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }

    private function categoryExists($name): bool
    {
        $categories = $this->receiveCategories();
        $result = false;
        foreach ($categories as $category) {
            if ($category['TableName'] === $name) $result = true;
        }
        return $result;
    }

    public static function getFullCategoryList(): array
    {
        $db = static::connectDB();
        $result = $db->query("SELECT `name`, `TableName`, `img` FROM category")->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }

    public static function getDiscountsList($count = 3): array
    {
        $db = static::connectDB();
        $query = "SELECT product.id,
                    product.name, 
                    product.price, 
                    product.img 
               FROM product 
         INNER JOIN category ON category_id = category.id
              WHERE product.old_price != 0
           ORDER BY product.popularity DESC";

        if ($count !== "*") $query .= " LIMIT $count";

        $result = $db->query($query)->fetchAll(\PDO::FETCH_ASSOC);
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
}
