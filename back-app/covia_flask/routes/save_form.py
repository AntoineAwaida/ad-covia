import csv
import io

from flask import request

from covia_flask import app
from covia_flask.database import db_session
from covia_flask.models.form import Form


def get_files_with_filename(filename: str) -> bool:
    result = Form.query.filter(Form.filename == filename).first()
    return False if result is None else True


def add_form(form, filename):
    f = Form(form, filename)
    db_session.add(f)
    db_session.commit()


@app.route("/", methods=["POST"])
def read_csv():
    file = request.files["files"]

    if get_files_with_filename(file.filename):
        return "File already uploaded."

    stream = io.StringIO(file.stream.read().decode("UTF-8"), newline=None)

    csv_input = csv.DictReader(stream, delimiter=";")
    for row in csv_input:
        form = dict(row)
        add_form(form, file.filename)
    return "Ok!"


@app.route("/hello", methods=["GET"])
def hello_world():
    return "Hello world"
