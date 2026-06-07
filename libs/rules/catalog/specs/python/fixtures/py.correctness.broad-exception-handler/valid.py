try:
    process_data()
except ValueError as e:
    log_error(e)

