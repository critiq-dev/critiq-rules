<?php

// Invalid: sprintf with too many arguments
$result = sprintf('Hello %s', $name, $extra);

// Invalid: sprintf with no placeholders but extra arguments
$result2 = sprintf('Hello world', $extra);
