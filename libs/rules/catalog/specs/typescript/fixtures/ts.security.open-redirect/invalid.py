from flask import redirect


def login():
    return redirect(request.args.get("next"))
