<?php
require 'vendor/autoload.php';
use App\Database\Connection;
use App\Models\Category;

$categ_name="laptops";

try {

    $pdo = Connection::get()->connect();
    echo "successfull connection\n";
    $category = new Category($categ_name, $pdo);

    $jsonData = json_encode($category->receiveCategories());
    echo $jsonData;
    file_put_contents("productList.json", $jsonData);

}
catch (\PDOException $e) {
    echo $e->getMessage();
}