<?php
$safe = basename($_FILES['avatar']['name']);
$destination = '/uploads/' . $safe;
move_uploaded_file($_FILES['avatar']['tmp_name'], $destination);
