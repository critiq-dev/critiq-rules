<?php

$value = file_get_contents($path);

if ($value === false) {
    throw new RuntimeException('Unable to read file');
}
