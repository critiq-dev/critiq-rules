fn run(items: Vec<String>) {
  let _ = futures::future::join_all(items.iter().map(task));
}
