<?php

// Defined in file — should not flag
function processData($input) {
    return $input;
}

$result = processData($input);

// Built-in functions — should not flag
$merged = array_merge($a, $b);
$len = strlen($name);
$parts = explode(',', $csv);
$exists = isset($input);
