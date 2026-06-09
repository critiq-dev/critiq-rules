<?php

class Foo {
    public static string $declared = 'ok';
}

// Undefined static property access
$val = Foo::$missing;

class Bar {
    public static string $existing = 'ok';

    public function test(): void {
        // Self-referencing undefined static property
        echo self::$noSuchProp;
    }
}

class Multi {
    public static string $a = 'ok';
}

// Cross-class undefined access
$v = Multi::$unknown;
