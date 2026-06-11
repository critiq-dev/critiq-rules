<?php

// Valid: define-then-use
function foo(): void {
    $x = 5;
    echo $x;
}

// Valid: instance method with $this
class MyClass {
    private $prop = 'value';

    public function bar(): void {
        echo $this->prop;
    }
}

// Valid: foreach binding is a definition
function process(array $items): void {
    foreach ($items as $item) {
        echo $item;
    }
}

// Valid: catch binding is a definition
function handle(): void {
    try {
        risky();
    } catch (\Exception $e) {
        echo $e->getMessage();
    }
}

// Valid: global declaration provides definition
$x = 1;
function globalAccess(): void {
    global $x;
    echo $x;
}

// Valid: function parameter is a definition
function withParam($name): void {
    echo $name;
}

// Valid: arrow function parameter is a definition
$adder = fn($a, $b) => $a + $b;
