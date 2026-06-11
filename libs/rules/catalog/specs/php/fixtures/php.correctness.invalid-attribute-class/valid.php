<?php

// Valid: #[Attribute] on concrete class with public constructor
#[Attribute]
class ValidAttribute {
    public function __construct(
        public string $name = 'default',
    ) {}
}

// Also valid: concrete class with public constructor and no #[Attribute]
class NormalClass {
    public function __construct() {}
}
