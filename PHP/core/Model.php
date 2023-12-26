<?php

namespace Core;

use App\Database\Connection;

class Model
{
    protected $db;
    protected function connectDB()
    {
        $this->db = Connection::get()->connect();
    }
}
