<?php

// Flaw 1: private parent property accessed from child
class ParentClass {
    private $secret;
}

class Child extends ParentClass {
    public function foo(): void {
        echo $this->secret;
    }
}
