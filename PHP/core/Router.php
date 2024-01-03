<?php

namespace Core;

class Router
{
    private $routes = ["catalog"];

    function __construct($routes)
    {
        $this->routes = $routes;
    }

    public function addRoute($method, $pathTemplate, $controller, $callback)
    {
        array_push($this->routes, new Route($method, $pathTemplate, $controller, $callback));
    }

    private function getURIPath($uri)
    {
        if (!empty($uri)) {
            return trim($uri, '/');
        }
    }

    private function createController($path)
    {
        $result = 'App\\Controllers\\' . ucfirst($path . "Controller");
        return $result;
    }

    private function getURIQuery($url): array
    {
        $result = [];
        if (empty($_SERVER['REQUEST_URI']))
            return $result;
        
        if (!key_exists('query', parse_url($url)))
            return $result;

        $queryStr = parse_url($url)['query'];
        $queryArray = explode("&", $queryStr);

        foreach ($queryArray as $query) {
            $exploded = explode("=", $query);
            $result[$exploded[0]] = $exploded[1];
        }
        return $result;
    }

    public function run()
    {
        $uri = $_SERVER['REQUEST_URI'];
        $uriPath = $this->getURIPath($uri);
        $uriQuery = $this->getURIQuery($uri);
        
        foreach ($this->routes as $route) {
            if (preg_match($route->pathTemplate, $uriPath)) {
                $controller = "App\\Controllers\\$route->controller";
                if (count($uriQuery) > 0) 
                    $controllerObject = new $controller($uriPath, $route->callback, $uriQuery);
                else $controllerObject = new $controller($uriPath, $route->callback);
                
                $controllerObject->get();
                break;
            }
        }
    }
}
