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

    public function getFullInfo() : Array {
        $result = $this->db->query(
        "SELECT product.id, product.name, product.price, product.img, product.quantity
           FROM product where product.id={$this->id}")->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }

    #public function postToUserCart() {

    #}

    public function getDisccounts($count = "*"): array
    {
        $query = "SELECT product.id,
                    product.name, 
                    product.price, 
                    product.img 
               FROM product 
         INNER JOIN category ON category_id = category.id
              WHERE product.old_price != 0
           ORDER BY product.popularity DESC";

        if ($count !== "*") $query .= "LIMIT $count";

        $result = $this->db->query($query)->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }
}
