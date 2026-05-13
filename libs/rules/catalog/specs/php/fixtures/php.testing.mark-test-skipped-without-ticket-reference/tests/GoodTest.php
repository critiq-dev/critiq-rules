<?php
use PHPUnit\Framework\TestCase;

class GoodTest extends TestCase {
  public function testX(): void {
    // JIRA-99
    $this->markTestSkipped();
  }
}
