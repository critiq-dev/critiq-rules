fn handler(request: Request) {
  let _ = std::fs::read_to_string(request.path);
}
