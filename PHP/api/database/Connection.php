<?php

namespace App\Database;

final class Connection
{
    private static ?Connection $conn = null;

    public function connect()
    {
        $params = parse_ini_file('database.ini');
        if ($params === false) {
            throw new \Exception("Error reading database configuration file");
        }
        [
        'host' => $host,  
        'database' => $db,
        'user' => $user,
        'password' => $pswd
        ] = $params;

        $pdo = new \PDO("mysql:host=$host;dbname=$db", $user, $pswd);
        $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

        return $pdo;
    }
    
    public static function get()
    {
        if (null === static::$conn) {
            static::$conn = new self();
        }

        return static::$conn;
    }

    protected function __construct()
    {

    }
}