<?php
require 'vendor/autoload.php';

use App\Database\Connection;
use App\Models\Category;
use Core\Router;

$categ_name = "laptops";

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type');

$routes = [
    "catalog" => "getFullList",
    "categories" => "getCategories",
    "brands" => "getFullList",
    "product" => "getFullList"
];

$router = new Router($routes);
$router->run();
