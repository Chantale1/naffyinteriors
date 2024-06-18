# connection.py
import sqlite3

def get_db_connection():
    conn = sqlite3.connect('naffy_interiors.db')
    return conn
