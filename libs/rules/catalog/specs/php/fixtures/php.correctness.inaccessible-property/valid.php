<?php

// Valid: public parent property accessed from child
class ParentClass {
    public $name;
}

class Child extends ParentClass {
    public function foo(): void {
        echo $this->name;
    }
}

// Valid: protected property accessed from subclass
class User {
    protected $password;
}

class Auth extends User {
    public function check(): string {
        return $this->password;
    }
}
