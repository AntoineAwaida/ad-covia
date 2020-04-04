import sqlalchemy
from sqlalchemy import Column, Integer, String
from database import Base


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=False)
    lastname = Column(String(120), unique=False)
    password = Column(String(120), unique=False)

    def __init__(self, user=None):
        self.name = user['name']
        self.lastname = user['lastname']
        self.password = user['password']

    def __repr__(self):
        return '<User %r>' % (self.name)
