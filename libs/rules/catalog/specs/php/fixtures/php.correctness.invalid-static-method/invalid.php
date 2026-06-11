<?php

class Worker {
    public function process(): void {
        // process() is not static but called via self::
        self::process();
    }
}
