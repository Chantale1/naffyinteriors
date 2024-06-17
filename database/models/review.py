from database.connection import get_db_connection




class Review:
    def __init__(self, customer_name, rating, feedback):
        self.customer_name = customer_name
        self.rating = rating
        self.feedback = feedback

    def save(self):
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO reviews (customer_name, rating, feedback) VALUES (?, ?, ?)",
                       (self.customer_name, self.rating, self.feedback))
        conn.commit()
        conn.close()

    @staticmethod
    def fetch_all_reviews():
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM reviews")
        reviews = cursor.fetchall()
        conn.close()
        return reviews

    @staticmethod
    def create_table():
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_name TEXT NOT NULL,
                rating INTEGER NOT NULL,
                feedback TEXT NOT NULL
            )
        """)
        conn.commit()
        conn.close()

    @staticmethod
    def drop_table():
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DROP TABLE IF EXISTS reviews")
        conn.commit()
        conn.close()