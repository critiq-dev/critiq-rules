fn connect(session: &mut ssh2::Session) {
    session.set_hostkey_check(false);
}
