from flask import Blueprint, jsonify, request

main = Blueprint('main', __name__)
@main.route('/add', methods=['POST'])
def add_task():
    return 'Done', 201

