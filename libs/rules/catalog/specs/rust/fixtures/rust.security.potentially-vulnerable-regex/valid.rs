fn validate(input: &str) -> bool {
    let re = regex::Regex::new(r"^[a-f0-9]+$").unwrap();
    re.is_match(input)
}
