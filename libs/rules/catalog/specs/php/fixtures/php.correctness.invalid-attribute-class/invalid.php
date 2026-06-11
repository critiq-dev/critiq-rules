<?php

// Invalid: #[Attribute] on abstract class
#[Attribute]
abstract class AbstractValidator {
    public function validate(): bool {
        return true;
    }
}

// Invalid: #[Attribute] on interface
#[Attribute]
interface FilterInterface {
    public function filter($value);
}

// Invalid: #[Attribute] with private constructor
#[Attribute]
class PrivateConstructorAttr {
    private function __construct() {}
}
