<?php

namespace App\Routes;

use \Core\Route;

function getRoutes()
{
    $routes = [
        new Route("GET", "/^catalog$/", "CatalogController", "getFullCategoryList"),
        new Route("GET", "/^catalog\/\w+/", "CatalogController", "getFullList"),
        new Route("GET", "/^brands$/", "BrandsController", "getFullList"),
        new Route("GET", "/^product\?id=[1-9][0-9]*$/", "ProductController", "getFullInfo"),
        new Route("GET", "/^discounts$/", "DiscountsController", "getDiscountsList"),
    ];
    return $routes;
}
