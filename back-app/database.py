from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import pymysql


pymysql.install_as_MySQLdb()
engine = create_engine(
    "mysql://admin:p@lp@R5abp@localhost:3306/bdd", convert_unicode=True
)
db_session = scoped_session(
    sessionmaker(autocommit=False, autoflush=False, bind=engine)
)
Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()

    Base.metadata.create_all(bind=engine)


def add_user(user):
    from user import User

    print(user)
    u = User(user)
    print(u)
    db_session.add(u)
    db_session.commit()
