<?php
$payload = json_encode(['event' => 'healthcheck']);
wp_remote_post('https://api.example.com/hook', ['body' => $payload]);
