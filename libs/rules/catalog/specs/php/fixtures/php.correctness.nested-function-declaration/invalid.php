<?php

function outer(): void {
    function inner(): void {
        echo 'nested';
    }
}
