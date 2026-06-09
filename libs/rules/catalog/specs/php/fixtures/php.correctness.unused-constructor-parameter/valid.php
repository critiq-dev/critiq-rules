<?php

class Service {
    public function __construct($db, $cache) {
        $this->db = $db;
        $this->cache = $cache;
    }
}
