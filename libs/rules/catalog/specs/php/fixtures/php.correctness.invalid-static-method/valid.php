<?php

class Worker {
    public static function process(): void {
        self::process();
    }

    public function run(): void {
        $this->run();
    }

    public function handle(): void {
        // missing method is not flagged by this rule (undefined, not invalid static)
        // self::missing();
    }
}

class Child extends Base {
    public function test(): void {
        parent::init();
    }
}
