<?php

namespace App\Controllers;

use Core\Controller;
use App\Models\Category;

class CatalogController extends Controller
{
    public function __construct($uriPath, $callback, $uriQuery = "")
    {
        if ($uriPath !== "catalog" and $uriPath!=="discounts") {
            $paterns = Array();
            $paterns[0] = '/catalog\//';
            $paterns[1] = '/\?.*/';
            $replacements = ['', ''];
            $category = preg_replace($paterns, $replacements, $uriPath);
            # echo "$category<br/><br/>";
            # print_r($uriQuery);
            # echo "<br/><br/>";
            # echo "$callback<br/><br/>";
            $this->model = new Category($category);
        }
        else $this->model = null;
        $this->callback = $callback;
    }

    public function get()
    {
        $callback = $this->callback;
        $jsonData = json_encode(is_null($this->model) ? Category::$callback() : $this->model->getFullList());
        echo $jsonData;
    }
}
