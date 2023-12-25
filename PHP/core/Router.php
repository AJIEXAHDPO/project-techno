<?php

namespace Core;

class Router
{
    private $routes = [];

    function __construct($routes)
    {
        
    }

    public function addRoute($method, $path, $callback) {
        array_push($this->routes, new Route($method, $path, $callback));
    }
}
