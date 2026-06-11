<?php

class Worker {
    public function run(): void {
        // undefined method via $this->
        $this->undefinedCall();
        // undefined method via self::
        self::missingMethod();
    }
}
