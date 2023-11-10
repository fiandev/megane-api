from flask import Flask
from app.config import config

server = Flask(__name__, template_folder="../resources/views")
server.secret_key = config["key"]
server.config['SECRET_KEY'] = config["key"]

from app.routes import api, web