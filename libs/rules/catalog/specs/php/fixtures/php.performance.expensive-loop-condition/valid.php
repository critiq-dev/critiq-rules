<?php

$remaining = count($items);
while ($remaining > 0) {
    array_pop($items);
    $remaining -= 1;
}
