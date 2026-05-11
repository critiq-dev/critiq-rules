pub async fn sqlx_ok(pool: &sqlx::PgPool, email: &str) {
    let _ = sqlx::query!("select * from users where email = $1", email)
        .fetch_one(pool)
        .await;
}

pub fn diesel_ok() {
    let _ = diesel::sql_query("select 1");
}
