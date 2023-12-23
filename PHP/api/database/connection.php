<?php

namespace App;

#use mysqli;
use PDO;

# params for mysqli
# $host = "127.0.0.1";
# $user = "root";
# $pswd = "21ahg76yb";
# $db = "techno";
# $port = "3306";

final class Database {
    private static $connection = null;

    public function connect() {
        $params = parse_ini_file('database.ini');
        
        if ($params === false)
            throw new \Exception("Invalid DB configuration file");

        [$host, $db, $user, $pswd] = $params;
        static::$connection = new PDO("host=$host,db=$db", $user, $pswd);
    }

    public function query ($data) {

        return $this->connection->query($data);
    }

}

$db = new Database($host, $user, $pswd, $db, $port);