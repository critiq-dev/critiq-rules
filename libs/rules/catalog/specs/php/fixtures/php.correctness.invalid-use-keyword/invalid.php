<?php

// Invalid: use inside interface
interface Loggable {
    use LoggableTrait;
}

// Invalid: use inside anonymous class
$obj = new class {
    use SomeTrait;
};
