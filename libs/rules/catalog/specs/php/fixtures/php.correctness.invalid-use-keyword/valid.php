<?php

// Valid: trait use in class body
trait LoggableTrait {
    public function log(string $msg): void {
        echo $msg;
    }
}

class Consumer {
    use LoggableTrait;
}

// Valid: use at file top-level (namespace import)
use Some\Namespace\ClassName;
