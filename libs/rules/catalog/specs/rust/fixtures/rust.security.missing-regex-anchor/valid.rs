fn validate(url: &str) -> bool {
    let re = regex::Regex::new("^http://example.com").unwrap();
    re.is_match(url)
}
