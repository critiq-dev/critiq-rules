fn check_access() -> bool {
    let user = "admin";
    // contains zero-width space (U+200B) after the if keyword
    if​ (user == "admin") {
        return true;
    }
    false
}
