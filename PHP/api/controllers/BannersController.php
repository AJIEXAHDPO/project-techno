<?php

namespace App\Controllers;

use Core\Controller;
use App\Models\Banners;

class BannersController extends Controller
{
    public function __construct($uriPath, $callback, $uriQuery)
    {
        $this->model = new Banners();
        $this->callback = $callback;
    }

    public function get()
    {
        $callback = $this->callback;
        $jsonData = json_encode($this->model->getList(4));
        echo $jsonData;
    }
}
