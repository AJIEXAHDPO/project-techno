<?php

namespace App\Models;

use Core\Model;

class Category extends Model
{

    private $tableName;

    public function __construct(String $tableName = 'laptops')
    {
        $this->db = static::connectDB();
        if ($this->categoryExists($tableName))
            $this->tableName = $tableName;
        else exit("Catalog creation failed: no such category in DB\n");
    }

    public function getFullListWithProps($query): array
    {
        $data = $this->getFullList($query);
        $filterProps = $this->getFilterProps($query);
        $parsedQuery = $this->parseQuery($query);
        $searchQuery = $this->createSearchQuery($parsedQuery);
        $minMaxPrice = $this->getMinMaxPrice($searchQuery);

        return ["data" => [...$data], "filterProps" => $filterProps, "priceRange" => $minMaxPrice];
    }

    private function createSearchQuery($parsedQuery)
    {
        if (array_key_exists('price-min', $parsedQuery))
            unset($parsedQuery['price-min']);

        if (array_key_exists('price-max', $parsedQuery))
            unset($parsedQuery['price-max']);

        $searchQuery = join(" AND ", array_map(
            fn ($key) => "($this->tableName.$key = '" . join("' OR $this->tableName.$key ='", $parsedQuery[$key]) . "')",
            array_keys($parsedQuery)
        ));

        # echo $searchQuery;
        # echo "<br />";
        return $searchQuery;
    }

    public function getFullList($query): array
    {
        $parsedQuery = $this->parseQuery($query);
        $searchQuery = $this->createSearchQuery($parsedQuery);
        $priceRange = [];

        if (array_key_exists('price-min', $parsedQuery)) {
            array_push($priceRange, 'product.price >= ' . $parsedQuery['price-min'][0]);
            unset($parsedQuery['price-min']);
        }

        if (array_key_exists('price-max', $parsedQuery)) {
            array_push($priceRange, 'product.price <= ' . $parsedQuery['price-max'][0]);
            unset($parsedQuery['price-max']);
        }

        /*print_r(
            "SELECT product.id,
                    product.name, 
                    product.price, 
                    product.img 
               FROM product 
         INNER JOIN category ON category_id = category.id
         INNER JOIN {$this->tableName} ON product.id= {$this->tableName}.id
              WHERE category.TableName = '{$this->tableName}'"
                . (($searchQuery !== "") ? " AND $searchQuery" : "")
                . (count($priceRange) > 0 ? (" AND " . join(" AND ", $priceRange)) : "")
        );
        echo "<br />";
        echo "<br />";*/


        $result = $this->db->query(
            "SELECT product.id,
                    product.name, 
                    product.price, 
                    product.img 
               FROM product 
         INNER JOIN category ON category_id = category.id
         INNER JOIN {$this->tableName} ON product.id= {$this->tableName}.id
              WHERE category.TableName = '{$this->tableName}'"
                . (($searchQuery !== "") ? " AND $searchQuery" : "")
                . (count($priceRange) > 0 ? (" AND " . join(" AND ", $priceRange)) : "")
        )->fetchAll(\PDO::FETCH_ASSOC);
        // return $this->parseQuery($query);
        return $result;
    }

    private function receiveCategories(): array
    {
        $result = $this->db->query("SELECT `TableName` FROM category;")->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }

    private function categoryExists($name): bool
    {
        $categories = $this->receiveCategories();
        $result = false;
        foreach ($categories as $category) {
            if ($category['TableName'] === $name) $result = true;
        }
        return $result;
    }

    public static function getFullCategoryList(): array
    {
        $db = static::connectDB();
        $result = $db->query("SELECT `name`, `TableName`, `img` FROM category")->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }

    public static function getDiscountsList($count = 3): array
    {
        $db = static::connectDB();
        $query = "SELECT product.id,
                    product.name, 
                    product.price, 
                    product.img 
               FROM product 
         INNER JOIN category ON category_id = category.id
              WHERE product.old_price != 0
           ORDER BY product.popularity DESC";

        if ($count !== "*") $query .= " LIMIT $count";

        $result = $db->query($query)->fetchAll(\PDO::FETCH_ASSOC);
        return $result;
    }

    private function parseQuery($query): array
    {
        $keys = array_keys($query);
        $result = [];
        $props = $this->getCategoryProps();
        # print_r(json_encode($query));
        # echo "<br />";
        # echo "<br />";
        foreach ($keys as $key) {
            $normalized_key = str_replace(["+"], "_", $key);

            if (array_search($normalized_key, $props) || $normalized_key === "price-min" || $normalized_key === "price-max") {
                $result[$normalized_key] = array_map(fn ($elem) => str_replace("+", " ", $elem), $query[$key]);
            }
        }
        # print_r(json_encode($result));
        return $result;
    }

    private function getCategoryProps()
    {
        $result = $this->db->query("SHOW COLUMNS FROM $this->tableName")->fetchAll(\PDO::FETCH_COLUMN);
        # print_r($result);
        # echo "<br />";
        # echo "<br />";
        return $result;
    }

    public function getFilterProps($query)
    {
        $parsedQuery = $this->parseQuery($query);

        $props = $this->getCategoryProps();
        array_splice($props, array_search('id', $props), 1);
        $result = [];
        foreach ($props as $prop) {
            $queryWithoutProp = [...$parsedQuery];
            unset($queryWithoutProp[$prop]);
            $searchQuery = $this->createSearchQuery($queryWithoutProp);
            $query = "SELECT sq2.`value` AS `value`, count(sq1.`value`) AS `count`
                        FROM (
                            SELECT `$prop` AS `value`
                            FROM $this->tableName" . ($searchQuery !== "" ? " WHERE $searchQuery" : "") . ") sq1
                        RIGHT OUTER JOIN (
                            SELECT `$prop` AS `value`
                            FROM $this->tableName 
                            GROUP BY `$prop`
                        ) sq2 ON sq1.`value`=sq2.`value` GROUP BY sq2.`value` ORDER BY `count` DESC";

            # echo $query;
            # echo "<br/ >";
            $result[$prop] = $this->db->query($query)->fetchAll(\PDO::FETCH_ASSOC);
        }
        return $result;
    }

    public function getMinMaxPrice($searchQuery)
    {
        $result = $this->db->query(
            "SELECT min(price) AS price_min, max(price) AS price_max 
            FROM product 
            INNER JOIN $this->tableName 
            ON $this->tableName.id = product.id" . ($searchQuery !== "" ? " WHERE $searchQuery" : "")
        )->fetch(\PDO::FETCH_ASSOC);

        return $result;
    }
}
