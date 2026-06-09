<?php

class Container {
    public function check($a): bool {
        return $a instanceof self;
    }
}

class Child extends Base {
    public function check($a): bool {
        return $a instanceof parent;
    }
}

$a instanceof SomeValidClass;
$a instanceof $className;
