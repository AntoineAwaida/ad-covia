from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import create_database, database_exists

import covia_flask.models.form
from covia_flask.config import DB_URI
from covia_flask.models import Base

ENGINE_URI = f"sqlite:///{DB_URI}"

if not database_exists(ENGINE_URI):
    create_database(ENGINE_URI)

engine = create_engine(ENGINE_URI, echo=True)
Base.metadata.create_all(engine)  # creates the tables if not exist
Session = sessionmaker()
Session.configure(bind=engine)
db_session = Session()


def close_db_connection() -> None:
    engine.dispose()
