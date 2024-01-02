<?php

namespace Core;

use App\Database\Connection;

class Model
{
    protected $db;
    protected function connectDB()
    {
        return Connection::get()->connect();
    }
}
