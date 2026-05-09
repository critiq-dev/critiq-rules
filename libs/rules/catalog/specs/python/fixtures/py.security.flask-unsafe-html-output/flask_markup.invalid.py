from markupsafe import Markup


@app.route("/preview")
def preview():
    return Markup(request.args["html"])
