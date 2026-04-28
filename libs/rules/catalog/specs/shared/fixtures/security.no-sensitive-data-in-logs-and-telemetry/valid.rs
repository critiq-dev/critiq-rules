fn handle(req: Request) {
    println!("{}", redact(req.headers().get("Authorization")));
}
