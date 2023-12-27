<?php

use Core\Model;

class Product extends Model
{

    public function __construct()
    {
        $this->connectDB();
    }

    /*public function getFullInfo() : Array {
        $result = $this->db->query("")->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }*/

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
