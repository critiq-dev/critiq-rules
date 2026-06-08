fn validate(input: &str) -> bool {
    let re = regex::Regex::new(r"((a+)+)").unwrap();
    re.is_match(input)
}
