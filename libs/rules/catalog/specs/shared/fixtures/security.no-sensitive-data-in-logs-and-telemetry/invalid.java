class Logging {
  void handle(HttpServletRequest request, Logger logger) {
    logger.info("token=" + request.getHeader("Authorization"));
  }
}
