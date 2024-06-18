import sys
import os
from datetime import datetime

# Assuming script.py is located in models directory
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
sys.path.append(parent_dir)

from models.services import Service
from models.review import Review

def main():
    # Drop and recreate tables
    Review.drop_table()
    Review.create_table()
    Service.drop_table()
    Service.create_table()

    # Insert sample reviews
    review1 = Review("John Doe", 4, "Great service and excellent results.", datetime(2024, 6, 12, 12, 0, 0))
    review1.save()

    review2 = Review("Alice Smith", 5, "Very satisfied with the interior design.", datetime(2024, 6, 13, 13, 0, 0))
    review2.save()

    review3 = Review("Bob Johnson", 3, "Average experience, could be better.", datetime(2024, 6, 14, 14, 0, 0))
    review3.save()

    review4 = Review("Emily Davis", 4, "Professional service and good communication.", datetime(2024, 6, 15, 15, 0, 0))
    review4.save()

    review5 = Review("Michael Brown", 5, "Impressed with the attention to detail.", datetime(2024, 6, 16, 16, 0, 0))
    review5.save()

    print("Reviews data inserted.")

    # Insert sample services
    service1 = Service("Residential Design")
    service1.save()

    service2 = Service("Commercial Office Renovation")
    service2.save()

    service3 = Service("Home Staging")
    service3.save()

    service4 = Service("Interior Decor Consultation")
    service4.save()

    service5 = Service("Custom Furniture Design")
    service5.save()

    print("Services data inserted.")

if __name__ == "__main__":
    main()
