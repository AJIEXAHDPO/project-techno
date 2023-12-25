<?php
require 'vendor/autoload.php';
use App\Database\Connection;
use App\Models\Category;
use Core\Router;

$categ_name="laptops";

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type');

try {

    $pdo = Connection::get()->connect();
    # echo "successfull connection\n";
    $routes = array();
    new Router($routes);
    $category = new Category($categ_name, $pdo);

    $jsonData = json_encode($category->getFullList());
    echo $jsonData;
    # file_put_contents("productList.json", $jsonData);

}
catch (\PDOException $e) {
    echo $e->getMessage();
}