<?php

function getName(): string
{
    return 'default';
}

function log(string $msg): void
{
    echo $msg;
}

class User
{
    public function getLabel(): string
    {
        return $this->name ?? 'guest';
    }
}
