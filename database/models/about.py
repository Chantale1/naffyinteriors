import sys
import os
import sqlite3

# Calculate the path to the 'database' directory
current_dir = os.path.dirname(os.path.abspath(_file_))
database_dir = os.path.abspath(os.path.join(current_dir, '..', '..', 'database'))  # Adjust '..' based on your actual structure
sys.path.insert(0, database_dir)

# Now you can import get_db_connection from connection.py
from connection import get_db_connection

class AboutNaffyInteriors:
    TABLE_NAME = 'about_naffy_interiors'

    def _init_(self, business_name, description, address=None, phone_number=None, email=None, website=None):
        self.business_name = business_name
        self.description = description
        self.address = address
        self.phone_number = phone_number
        self.email = email
        self.website = website

    def save(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO about_naffy_interiors 
                (business_name, description, address, phone_number, email, website) 
                VALUES (?, ?, ?, ?, ?, ?)""",
                (self.business_name, self.description, self.address, self.phone_number, self.email, self.website))
            conn.commit()
            print(f"About information for '{self.business_name}' saved successfully.")
        except sqlite3.Error as e:
            print(f"Error saving about information: {e}")
        finally:
            if conn:
                conn.close()

    @staticmethod
    def fetch_all_about_info():
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM about_naffy_interiors")
            about_info = cursor.fetchall()
            return about_info
        except sqlite3.Error as e:
            print(f"Error fetching about information: {e}")
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
                CREATE TABLE IF NOT EXISTS about_naffy_interiors (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    business_name TEXT NOT NULL,
                    description TEXT NOT NULL,
                    address TEXT,
                    phone_number TEXT,
                    email TEXT,
                    website TEXT
                )
            """)
            conn.commit()
            print("Table 'about_naffy_interiors' created successfully.")
        except sqlite3.Error as e:
            print(f"Error creating table 'about_naffy_interiors': {e}")
        finally:
            if conn:
                conn.close()

    @staticmethod
    def drop_table():
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("DROP TABLE IF EXISTS about_naffy_interiors")
            conn.commit()
            print("Table 'about_naffy_interiors' dropped successfully.")
        except sqlite3.Error as e:
            print(f"Error dropping table 'about_naffy_interiors': {e}")
        finally:
            if conn:
                conn.close()

# Example usage:
if _name_ == "_main_":
    about_naffy_interiors = AboutNaffyInteriors(
        business_name="Naffy Interiors",
        description="Naffy Interiors specializes in high-end interior design solutions.",
        address="123 Main Street, Industrial Area, Nairobi, Kenya",
        phone_number="+1234567890",
        email="naffyinteriors@gmail.com",
        website="https://www.naffyinteriors.com"
    )
    
    # Create the table (if not exists)
    AboutNaffyInteriors.create_table()
    
    # Save the about information
    about_naffy_interiors.save()
    
    # Display all about information (optional)
    about_info = AboutNaffyInteriors.fetch_all_about_info()
    if about_info:
        print("All About Information:")
        for info in about_info:
            print(info)
    else:
        print("No about information found.")
