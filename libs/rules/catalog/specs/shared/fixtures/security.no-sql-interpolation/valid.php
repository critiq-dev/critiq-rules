<?php

$pdo->query("SELECT * FROM users WHERE email = ?", [$email]);
