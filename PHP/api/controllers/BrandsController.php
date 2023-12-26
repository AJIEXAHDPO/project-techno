<?php
// BrandsController.php
namespace App\Controller;
use Core\Controller;
use App\Models\Brands;

class BrandsController extends Controller {
 private $brands;
 public function _construct () 
 {
  $this->brands = new Brands ();
  echo json_encode($this->brands->getFullList());
 }
}