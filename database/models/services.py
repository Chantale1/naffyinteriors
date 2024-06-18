from database.connection import get_db_connection
import sqlite3

class Service:
    TABLE_NAME = 'services'

    def __init__(self, name):
        self.name = name

    def save(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO services (name) VALUES (?)", (self.name,))
            self.id = cursor.lastrowid
            conn.commit()
        except sqlite3.Error as e:
            print(f"Error saving service: {e}")
        finally:
            if conn:
                conn.close()

    @staticmethod
    def fetch_all_services():
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM services")
            services = cursor.fetchall()
            return services
        except sqlite3.Error as e:
            print(f"Error fetching services: {e}")
            return []
        finally:
            if conn:
                conn.close()

    @staticmethod
    def create_table():
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS services (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL
                )
            """)
            conn.commit()
            print("Table 'services' created successfully.")
        except sqlite3.Error as e:
            print(f"Error creating table 'services': {e}")
        finally:
            if conn:
                conn.close()

    @staticmethod
    def drop_table():
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("DROP TABLE IF EXISTS services")
            conn.commit()
            print("Table 'services' dropped successfully.")
        except sqlite3.Error as e:
            print(f"Error dropping table 'services': {e}")
        finally:
            if conn:
                conn.close()
