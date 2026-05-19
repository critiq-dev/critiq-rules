fn auth(token: &str) {
    let _ = jsonwebtoken::decode::<Claims>(token, &Validation::default());
}
