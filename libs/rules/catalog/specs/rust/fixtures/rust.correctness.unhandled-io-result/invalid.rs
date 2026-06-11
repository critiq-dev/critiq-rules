fn bad() {
    std::fs::File::open("missing.txt");
}
