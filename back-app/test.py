from database import init_db
from database import db_session
from database import add_user
import csv
from flask import Flask
app = Flask(__name__)


def init():
    init_db()



@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


@app.route('/')
def hello_world():
    init()
    with open("test.csv", 'r') as file:
        csv_file = csv.DictReader(file, delimiter=';')
        for row in csv_file:
            user = dict(row)
            add_user(user)
    return 'Hello world'
