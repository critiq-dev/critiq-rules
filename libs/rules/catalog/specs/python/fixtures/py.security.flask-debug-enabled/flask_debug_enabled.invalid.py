import os


app.config["DEBUG"] = True
os.environ["FLASK_DEBUG"] = "1"
app.run(debug=True)
