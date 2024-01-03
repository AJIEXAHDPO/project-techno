<?php
require 'vendor/autoload.php';

use Core\Router;

$categ_name = "laptops";

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type');

$routes = [
    new Core\Route("GET", "/^catalog$/", "CatalogController", "getFullCategoryList"),
    new Core\Route("GET", "/^catalog\/\w+/", "CatalogController", "getFullList"),
    new Core\Route("GET", "/^brands$/", "BrandsController", "getList"),
    new Core\Route("GET", "/^product\?id=[1-9][0-9]*$/", "ProductController", "getFullInfo"),
    new Core\Route("GET", "/^discounts$/", "CatalogController", "getDiscountsList"),
];

$router = new Router($routes);
$router->run();
