<?php
use PHPUnit\Framework\TestCase;

class BadTest extends TestCase {
  public function testX(): void {
    $this->markTestSkipped();
  }
}
