<?php

final class SafeFactory {
    public function create(): self {
        return new self();
    }
}
