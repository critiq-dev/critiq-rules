fn test() {
    let s = "hello, world";
    s.find('o');
    s.split('x');
    s.contains('a');
    s.starts_with('H');
    s.ends_with('d');
    s.replace('e', "E");
    s.trim_start_matches('h');
    s.trim_end_matches('d');
    s.strip_prefix('h');
    s.strip_suffix('d');
    s.matches('o');
    s.rmatches('o');
    s.find("hello");
    s.split("ll");
    s.contains("wor");
    s.starts_with("hel");
    s.find('\n');
}
