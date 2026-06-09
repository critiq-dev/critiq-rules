<?php

#[Attribute(Attribute::TARGET_PROPERTY)]
class PropertyAttr {}

#[Attribute]
class AllTargetsAttr {}

#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_PROPERTY)]
class MultiTargetAttr {}

class Foo {
    #[PropertyAttr]
    public string $prop1;

    #[AllTargetsAttr]
    public string $prop2;

    #[MultiTargetAttr]
    public string $prop3;

    // Attribute on method should be ignored
    #[ClassOnlyAttr]
    public function run(): void {}
}

// Unknown attribute class — bail out
class Bar {
    #[UnknownAttr]
    public string $prop4;
}
