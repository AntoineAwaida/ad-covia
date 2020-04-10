from flask import Flask

from covia_flask.database import close_db_connection

app = Flask(__name__)


@app.teardown_appcontext
def shutdown_session(exception=None):
    close_db_connection()
