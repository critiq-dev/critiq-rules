<?php
$wpdb->query(
    $wpdb->prepare(
        "DELETE FROM {$wpdb->postmeta} WHERE post_id = %d",
        absint($_GET['post_id'])
    )
);
