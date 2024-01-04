<?php

namespace App\Routes;

use \Core\Route;

function getRoutes()
{
    $routes = [
        new Route("GET", "/^catalog$/", "CatalogController", "getFullCategoryList"),
        new Route("GET", "/^catalog\/\w+/", "CatalogController", "getFullList"),
        new Route("GET", "/^brands$/", "BrandsController", "getList"),
        new Route("GET", "/^product\?id=[1-9][0-9]*$/", "ProductController", "getFullInfo"),
        new Route("GET", "/^discounts$/", "CatalogController", "getDiscountsList"),
    ];
    return $routes;
}
