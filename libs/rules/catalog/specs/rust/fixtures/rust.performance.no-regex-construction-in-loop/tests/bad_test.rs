fn test_regex_loop(items: Vec<&str>) {
  for item in items {
    let _ = Regex::new(item).unwrap();
  }
}
