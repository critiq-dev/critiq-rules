#[derive(serde::Deserialize)]
struct Config {
    host: String,
}

// Deserialize only into explicit, validated structs at a trusted boundary.
