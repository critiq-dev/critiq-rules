<?php

function inner(): void {
    echo 'helper';
}

function outer(): void {
    inner();
}
