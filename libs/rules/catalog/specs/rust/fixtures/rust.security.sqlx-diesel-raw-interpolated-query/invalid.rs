pub fn sqlx_bad(email: &str) {
    let _ = sqlx::query(&format!("select * from users where email = '{}'", email));
}

pub fn diesel_bad(x: i32) {
    let _ = diesel::sql_query(format!("select 1 where id = {}", x));
}
