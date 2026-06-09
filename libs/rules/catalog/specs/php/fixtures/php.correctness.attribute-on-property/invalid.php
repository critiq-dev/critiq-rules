<?php

#[Attribute(Attribute::TARGET_CLASS)]
class ClassOnlyAttr {}

#[Attribute(Attribute::TARGET_METHOD)]
class MethodOnlyAttr {}

class Foo {
    #[ClassOnlyAttr]
    public string $prop1;

    #[MethodOnlyAttr]
    public string $prop2;
}
