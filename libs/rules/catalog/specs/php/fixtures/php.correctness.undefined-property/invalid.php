<?php

class Foo {
    public string $name;

    public function test(): void {
        // Invalid: accessing undefined property
        echo $this->undefinedProp;
    }
}
