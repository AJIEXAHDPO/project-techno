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

    public function getFullInfo()
    {
        $result = $this->db->query(
        "SELECT product.id, product.name, product.price, product.img, product.quantity, product.description
           FROM product where product.id={$this->id}"
        )->fetch(\PDO::FETCH_ASSOC);
        return $result;
    }

    /*
    public function postToUserCart() {

    }
    */

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
}
