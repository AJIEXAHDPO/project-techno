<?php

namespace App\Controllers;

use Core\Controller;
use App\Models\Banners;

class BannersController extends Controller
{
    public function __construct()
    {
        $this->model = new Banners();
    }

    public function get()
    {
        $jsonData = json_encode($this->model->getList(4));
        echo $jsonData;
    }
}
