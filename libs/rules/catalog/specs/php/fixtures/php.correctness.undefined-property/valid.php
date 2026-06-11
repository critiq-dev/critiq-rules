<?php

// Valid: accessing defined property
class Foo {
    public string $name;

    public function test(): void {
        echo $this->name;
    }
}

// Skipped: class with extends (inherited properties not visible)
class Child extends Base {
    public function test(): void {
        echo $this->inheritedProp;
    }
}

// Skipped: class with __get magic method
class Dynamic {
    private array $data = [];

    public function __get(string $name): mixed {
        return $this->data[$name] ?? null;
    }

    public function test(): void {
        echo $this->anything;
    }
}

// Constructor-promoted property is recognized
class Promoted {
    public function __construct(private string $name) {}

    public function test(): void {
        echo $this->name;
    }
}
