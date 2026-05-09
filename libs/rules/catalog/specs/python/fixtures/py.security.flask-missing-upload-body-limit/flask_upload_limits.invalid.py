import os


@app.post("/upload")
def upload():
    file = request.files["file"]
    file.save(os.path.join("uploads", "blob.bin"))
