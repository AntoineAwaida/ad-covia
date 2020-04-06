from database import init_db
from database import db_session
from database import add_form,get_files_with_filename
import csv
import io
import pandas as pd
from flask import Flask
from flask import request
app = Flask(__name__)


def init():
    init_db()



@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


@app.route('/', methods=['POST'])
def hello_world():
    init()
   
    file = request.files['files']

   
    if get_files_with_filename(file.filename):
        return 'File already uploaded.'
  
    stream = io.StringIO(file.stream.read().decode("UTF-8"), newline = None)

    csv_input = csv.DictReader(stream, delimiter=';')
    for row in csv_input:
        form = dict(row)
        add_form(form,file.filename)
    return 'Ok!'


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000, debug=True, threaded=True)

