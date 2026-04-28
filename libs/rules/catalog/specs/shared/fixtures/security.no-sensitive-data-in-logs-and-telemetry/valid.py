import logging

logger = logging.getLogger(__name__)


def redact(value):
    return value


def handle_checkout(email):
    logger.info("checkout email=%s", redact(email))
