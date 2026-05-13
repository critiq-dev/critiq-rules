<?php
use PHPUnit\Framework\TestCase;

class BadTest extends TestCase {
  public function testX(): void {
    curl_init('http://example.com');
  }
}
