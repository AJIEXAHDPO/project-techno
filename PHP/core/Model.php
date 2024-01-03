<?php

namespace Core;

use App\Database\Connection;

class Model
{
    protected $db;
    protected static function connectDB()
    {
        return Connection::get()->connect();
    }
}
