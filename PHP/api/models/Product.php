<?php

namespace App\Models;

use Core\Model;

class Product extends Model
{
    private $id;
    public function __construct($id)
    {
        $this->db = static::connectDB();
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
            FROM category 
            INNER JOIN product 
            ON category_id = category.id 
            WHERE product.id = {$this->id}"
        )->fetch(\PDO::FETCH_ASSOC);

        $result = $queryResult["TableName"];
        return $result;
    }

    public function getMainInfo(): array
    {
        $result = $this->db->query(
            "SELECT product.id, 
                product.name, 
                product.price, 
                product.img, 
                product.quantity, 
                product.description, 
                category.name AS category_name,
                category.TableName AS category_qname
               FROM product INNER JOIN category ON category_id=category.id WHERE product.id={$this->id}"
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
