from database.connection import get_db_connection
import sqlite3

class Review:
    TABLE_NAME = 'reviews'

    def __init__(self, customer_name, rating, feedback, created_at=None):
        self.customer_name = customer_name
        self.rating = rating
        self.feedback = feedback
        self.created_at = created_at

    def save(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO reviews (customer_name, rating, feedback, created_at) VALUES (?, ?, ?, ?)",
                           (self.customer_name, self.rating, self.feedback, self.created_at))
            conn.commit()
        except sqlite3.Error as e:
            print(f"Error saving review: {e}")
        finally:
            if conn:
                conn.close()

    @staticmethod
    def fetch_all_reviews():
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM reviews")
            reviews = cursor.fetchall()
            return reviews
        except sqlite3.Error as e:
            print(f"Error fetching reviews: {e}")
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
                CREATE TABLE IF NOT EXISTS reviews (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    customer_name TEXT NOT NULL,
                    rating INTEGER NOT NULL,
                    feedback TEXT NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            conn.commit()
            print("Table 'reviews' created successfully.")
        except sqlite3.Error as e:
            print(f"Error creating table 'reviews': {e}")
        finally:
            if conn:
                conn.close()

    @staticmethod
    def drop_table():
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("DROP TABLE IF EXISTS reviews")
            conn.commit()
            print("Table 'reviews' dropped successfully.")
        except sqlite3.Error as e:
            print(f"Error dropping table 'reviews': {e}")
        finally:
            if conn:
                conn.close()
