<?php

// Flaw 1: use-before-define
function foo(): void {
    echo $x;
    $x = 5;
}

// Flaw 2: $this in static method
class MyClass {
    private $prop = 'value';

    public static function bar(): void {
        echo $this->prop;
    }
}

// Flaw 3: post-unset use
function baz(): void {
    $y = 1;
    unset($y);
    echo $y;
}
