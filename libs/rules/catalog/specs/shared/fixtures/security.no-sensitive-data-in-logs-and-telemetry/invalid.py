import logging

logger = logging.getLogger(__name__)


def handle_checkout(email):
    logger.info("checkout email=%s", email)
