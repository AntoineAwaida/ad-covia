import csv
import io

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from database import add_form, db_session, get_files_with_filename, init_db


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


def init():
    init_db()


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


@app.route("/", methods=["POST"])
def read_csv():
    init()

    file = request.files["files"]

    if get_files_with_filename(file.filename):
        return "File already uploaded."

    stream = io.StringIO(file.stream.read().decode("UTF-8"), newline=None)

    csv_input = csv.DictReader(stream, delimiter=";")
    for row in csv_input:
        form = dict(row)
        add_form(form, file.filename)
    return "Ok!"


@app.route("/", methods=["GET"])
def status():
    response = jsonify({"status": True})
    return response


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True, threaded=True)
