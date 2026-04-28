class Logging {
  void handle(HttpServletRequest request, Logger logger) {
    logger.info(redact(request.getHeader("Authorization")));
  }
}
