from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import datetime
from views import main

db = SQLAlchemy()




def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
    db.init_app(app)
    app.register_blueprint(main)
    return app


if __name__ == '__main__':
    app1 = create_app()
    app1.run(debug=True)
