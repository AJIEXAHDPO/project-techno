<?php
require 'vendor/autoload.php';

use Core\Router;

use function App\Routes\getRoutes;

$categ_name = "laptops";

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type');

$routes = getRoutes();

$router = new Router($routes);
$router->run();
