from application.core.DBConnection import DBConnection
from application.utilities.env import env

class LaheluDB (DBConnection):
    def __init__ (self):
        username = env("DB_USERNAME")
        password = env("DB_PASSWORD")
        clauster = env("DB_CLUSTER")
        client = env("DB_CLIENT")
        
        super().__init__(username, password, clauster, client)
        