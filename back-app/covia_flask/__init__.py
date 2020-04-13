from flask import Flask

from covia_flask.database import close_db_connection
from covia_flask.routes.save_form import forms

app = Flask(__name__)
app.register_blueprint(forms)


@app.teardown_appcontext
def shutdown_session(exception=None):
    close_db_connection()
