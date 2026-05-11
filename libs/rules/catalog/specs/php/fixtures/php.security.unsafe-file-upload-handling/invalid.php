<?php
$destination = '/uploads/' . $_FILES['avatar']['name'];
move_uploaded_file($_FILES['avatar']['tmp_name'], $destination);
