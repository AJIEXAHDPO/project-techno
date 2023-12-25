<?php

namespace Core;

use Exception;

final class Route
{
    private $method;
    private $path;
    private $callback;
    private $allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

    public function __construct($method, $path, $callback) {
        if (array_search($method, $this->allowedMethods) === false)
            throw new Exception("Invalid method name");

        $this->method = $method;
        $this->path = $path;
        $this->callback = $callback;
    }
}

