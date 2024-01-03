<?php

namespace App\Models;

use Core\Model;

class Banners extends Model
{
    public function __construct()
    {
        $this->db = static::connectDB();
    }

    public function getList($count)
    {
        $result = $this->db->query(
            "SELECT banner.id, 
                    banner.headerText, 
                    banner.innerText, 
                    banner.img 
               FROM banner 
              LIMIT {$count}"
        )->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }
}
