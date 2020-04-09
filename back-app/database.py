from pymysql import install_as_MySQLdb
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import scoped_session, sessionmaker

install_as_MySQLdb()
engine = create_engine("mysql://localhost:3306")
db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()

    import entities.form

    Base.metadata.create_all(bind=engine)


def get_files_with_filename(filename):
    from entities.form import Form

    result = Form.query.filter(Form.filename == filename).first()
    return False if result is None else True


def add_form(form, filename):
    from entities.form import Form

    f = Form(form, filename)
    db_session.add(f)
    db_session.commit()
