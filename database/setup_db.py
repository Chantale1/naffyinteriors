import sqlite3

# Function to create tables
def create_tables():
    try:
        conn = sqlite3.connect('naffy_interiors.db')
        cursor = conn.cursor()

        # Create reviews table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_name TEXT NOT NULL,
                rating INTEGER NOT NULL,
                feedback TEXT
            )
        ''')

        # Create about_info table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS about_info (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                content TEXT
            )
        ''')

        conn.commit()
    finally:
        if conn:
            conn.close()

# Example usage:
if __name__ == "__main__":
    create_tables()