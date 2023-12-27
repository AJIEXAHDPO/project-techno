<?php

namespace Core;

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

    private function createController ($path) 
    {
        $result = 'App\\Controllers\\'. ucfirst($path . "Controller");
        return $result;
    }

    public function run()
    {
        $uri = $this->getURI();
        foreach($this->routes as $path => $callback)
        {
            if(preg_match("/^$path/", $uri))
            {
                $controller = $this->createController($path);
                $controllerObject = new $controller();
                $controllerObject->get();
                break;
            }
        }
    }


}
