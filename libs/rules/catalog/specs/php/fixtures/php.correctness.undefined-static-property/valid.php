<?php

class Foo {
    public static string $declared = 'ok';
}

$val = Foo::$declared;

class Bar {
    public static string $existing = 'ok';

    public function test(): void {
        echo self::$existing;
    }
}

// Dynamic class reference — bail out
$className = 'Foo';
$val2 = $className::$declared;

// Parent reference — bail out
class Child extends Base {
    public function test(): void {
        echo parent::$someProp;
    }
}
