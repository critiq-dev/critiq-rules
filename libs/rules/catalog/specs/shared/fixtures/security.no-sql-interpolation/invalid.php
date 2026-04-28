<?php

$email = $_GET["email"];
$query = "SELECT * FROM users WHERE email = '" . $email . "'";
$pdo->query($query);
