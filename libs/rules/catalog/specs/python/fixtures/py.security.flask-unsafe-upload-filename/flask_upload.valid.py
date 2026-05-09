import os

from werkzeug.utils import secure_filename

app.config["MAX_CONTENT_LENGTH"] = 16 * 1000 * 1000


@app.post("/upload")
def upload():
    file = request.files["file"]
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
