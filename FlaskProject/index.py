

import numpy as np
from flask import Flask, request, jsonify, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

# How to run flask Application
# export FLASK_APP=hello.py
# flask run
#  * Running on http://127.0.0.1:5000/