<?php

class Worker {
    public function run(): void {
        $this->run();
        self::run();
    }

    public static function reset(): void {
        self::reset();
    }
}

class Child extends Base {
    public function test(): void {
        $this->missing();
    }
}
