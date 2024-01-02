<?php
// Brands.php
namespace App\Models;

use Core\Model;

class Brands extends Model
{
    public function __construct()
    {
        $this->db = $this->connectDB();
    }

    public function getFullList()
    {
        $result = $this->db->query(
            "SELECT brand.id, brand.name, brand.img FROM brand"
        )->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }
}
