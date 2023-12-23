<?php

namespace app\Database;

use mysqli;

$host = "127.0.0.1";
$user = "root";
$pswd = "21ahg76yb";
$db = "techno";
$port = "3306";

class Database {
    private $mysqli;

    public function __construct($host, $user, $pswd, $db, $port) {
        $this->mysqli = new mysqli($host, $user, $pswd, $db, $port);
    }

    public function query ($data) {

        return $this->mysqli->query($data);
    }
}

$db = new Database($host, $user, $pswd, $db, $port);