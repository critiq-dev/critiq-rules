<?php
add_action('wp_ajax_delete_invoice', function () {
    check_ajax_referer('delete_invoice');
    if (! current_user_can('manage_options')) {
        wp_send_json_error(null, 403);
    }
    delete_invoice(absint($_POST['invoice_id']));
    wp_send_json_success();
});
