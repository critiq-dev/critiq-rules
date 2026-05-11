<?php
add_action('wp_ajax_delete_invoice', function () {
    delete_invoice($_POST['invoice_id']);
    wp_send_json_success();
});
