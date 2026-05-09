import bleach


@app.route("/preview")
def preview():
    return bleach.clean(request.args["html"])
