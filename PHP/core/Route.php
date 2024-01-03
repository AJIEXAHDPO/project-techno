<?php

namespace Core;

use Exception;

final class Route
{
    public $method;
    public $pathTemplate;
    public $callback;
    public $controller;
    private $allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

    public function __construct($method, $path, $controller, $callback) {
        if (array_search($method, $this->allowedMethods) === false)
            throw new Exception("Invalid method name");

        $this->method = strtolower($method);
        $this->pathTemplate = $path;
        $this->controller = $controller;
        $this->callback = $callback;
    }
}

