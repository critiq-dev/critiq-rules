import os

app.config["MAX_CONTENT_LENGTH"] = 16 * 1000 * 1000


@app.post("/upload")
def upload():
    file = request.files["file"]
    file.save(os.path.join("uploads", "blob.bin"))
