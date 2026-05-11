<?php
$wpdb->query("DELETE FROM {$wpdb->postmeta} WHERE post_id = " . $_GET['post_id']);
