<?php

namespace Core;
use App\Controllers\CatalogController;

class Router
{
    private $routes = ["catalog"];

    function __construct($routes)
    {
        $this->routes = $routes;
    }

    public function addRoute($method, $path, $callback)
    {
        array_push($this->routes, new Route($method, $path, $callback));
    }

    private function getURI()
    {
        if (!empty($_SERVER['REQUEST_URI'])) {
            return trim($_SERVER['REQUEST_URI'], '/');
        }
    }

    public function run()
    {
        $uri = $this->getURI();
        $controllerObject = new CatalogController("laptops");
        $controllerObject->get();
        
        foreach($this->routes as $uriPattern => $path)
        {
            if(preg_match("~$uriPattern~", $uri))
            {

                
                $controllerObject = new CatalogController("laptops");
                $controllerObject->get();
                break;
            }
        }
    }


}
