email = params[:email]
query = format("SELECT * FROM users WHERE email = '%s'", email)
connection.execute(query)
