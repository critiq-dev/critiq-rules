struct PreviewQuery {
    preview: String,
}

fn render(context: &mut tera::Context, query: &PreviewQuery) {
    context.insert("preview", &tera::Value::String(query.preview.clone()));
}
