<?php

function done(): void
{
    if ($ready) {
        return;
    }

    echo 'still reachable';
}
