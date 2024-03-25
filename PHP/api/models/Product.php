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
    
    public static function createProduct($props)
    {
        $db = static::connectDB();
        $id = $db->query(
            "SELECT max(id) FROM product;"
        )->fetch(\PDO::FETCH_ASSOC)["id"];
        $category_id = $db->query(
            "SELECT id 
            FROM category 
            WHERE TableName = {$props['category']}"
        )->fetch(\PDO::FETCH_ASSOC)["id"] + 1;
        $old_price_name = $props['old_price'] ? ' `old_price`,' : "";
        $old_price = $props['old_price'] ? "{$props['old_price']}, " : "";
        $db->query("INSERT INTO `techno`.`product` 
            (`id`, `name`, `price`, `quantity`, `category_id`, `img`, `popularity`,$old_price_name `description`, `brand`) VALUES 
            (
                $id, 
                {$props['name']}, 
                {$props['price']}, 
                {$props['quantity']}, 
                $category_id, 
                {$props['img']}, 
                {$props['popularity']}, 
                $old_price
                {$props['description']}, 
                {$props['brand']}
            );
        ");
        $db->query("INSERT INTO {$props['category']} (`id` )");
    }*/

    public function getSearchResults($search): array
    {
        $result = $this->db->query(
            "SELECT * 
            FROM product 
            where product.name 
            like $search
            limit 10"
        )->fetch(\PDO::FETCH_ASSOC);
        return $result;
    }
}
