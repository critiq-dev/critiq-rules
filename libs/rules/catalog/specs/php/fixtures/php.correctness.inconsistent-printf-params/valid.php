<?php

// Valid: correct sprintf
$result = sprintf('Hello %s', $name);

// Valid: sprintf with no placeholders and no extra args
$result2 = sprintf('Hello world');

// Valid: positional placeholders
$result3 = sprintf('%1$s %1$s', $name);
