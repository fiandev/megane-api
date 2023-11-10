from flask import Flask
from application.config import config

server = Flask(__name__, template_folder="../resources/views")
server.secret_key = config["key"]
server.config['SECRET_KEY'] = config["key"]

from application.routes import api, web
