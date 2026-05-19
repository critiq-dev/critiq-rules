use jsonwebtoken::{decode, DecodingKey, Validation};

fn auth(token: &str) {
    let key = DecodingKey::from_secret(b"secret");
    let _ = decode::<Claims>(token, &key, &Validation::default());
}
