<?php

class BaseFactory {
    public function create(): self {
        return new static();
    }
}
