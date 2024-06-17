
from review import Review
from models.services import Service

# Drop and recreate tables
Review.drop_table()
Review.create_table()
Service.drop_table()
Service.create_table()

# Insert sample reviews
Review.insert_review("John Doe", 4, "Great service and excellent results.", "2024-06-12 12:00:00")
Review.insert_review("Alice Smith", 5, "Very satisfied with the interior design!", "2024-06-13 13:00:00")
Review.insert_review("Bob Johnson", 3, "Average experience, could be better.", "2024-06-14 14:00:00")
Review.insert_review("Emily Davis", 4, "Professional service and good communication.", "2024-06-15 15:00:00")
Review.insert_review("Michael Brown", 5, "Impressed with the attention to detail.", "2024-06-16 16:00:00")

# Insert sample services
Service.insert_service("Residential Design")
Service.insert_service("Commercial Office Renovation")
Service.insert_service("Home Staging")
Service.insert_service("Interior Decor Consultation")
Service.insert_service("Custom Furniture Design")

print("Reviews and services data inserted.")
