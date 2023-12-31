<?php

namespace App\Models;

use Core\Model;

class Product extends Model
{
    private $id;
    public function __construct($id)
    {
        $this->connectDB();
        $this->id = $id;
    }

    public function getFullInfo(): array
    {
        $result = [];
        $result["mainInfo"] = $this->getMainInfo();
        $result["characteristics"] = $this->getCharacteristics();
        return $result;
    }

    public function getProductCategory()
    {
        $queryResult = $this->db->query(
            "SELECT category.TableName 
            from category 
            inner join product 
            on category_id = category.id 
            where product.id = {$this->id}"
        )->fetch(\PDO::FETCH_ASSOC);

        $result = $queryResult["TableName"];
        return $result;
    }

    public function getDiscounts($count = "*"): array
    {
        $query = "SELECT product.id,
                    product.name, 
                    product.price, 
                    product.img 
               FROM product 
         INNER JOIN category ON category_id = category.id
              WHERE product.old_price != 0
           ORDER BY product.popularity DESC";

        if ($count !== "*") $query .= " LIMIT $count";

        $result = $this->db->query($query)->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }


    public function getMainInfo(): array
    {
        $result = $this->db->query(
            "SELECT product.id, product.name, product.price, product.img, product.quantity, product.description
               FROM product where product.id={$this->id}"
        )->fetch(\PDO::FETCH_ASSOC);
        return $result;
    }

    public function getCharacteristics(): array
    {
        $category = $this->getProductCategory();
        $result = $this->db->query(
            "SELECT *
            FROM {$category} q
            where q.id={$this->id}"
        )->fetch(\PDO::FETCH_ASSOC);
        unset($result["id"]);
        return $result;
    }

    /*
    public function getCategoryColumns() : array {
        $result = $this->db->query("SHOW COLUMNS FROM laptops")->fetchAll(\PDO::FETCH_ASSOC);
        $fields = array_map(fn($column)=> $column['Field'], $result);
        return $fields;
    }  

    public function postToUserCart() {
        
    }
    */
}
