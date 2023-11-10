from flask import render_template
from app.core.server import server

@server.route("/")
def Home ():
    return render_template("index.html")