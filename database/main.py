import argparse
from models.review import Review
from models.services import Service


db_file = './database/naffy_interiors.db'

def initialize_db():
    Review.create_table()
    Service.create_table()
    print("Database and tables created.")

def drop_db():
    Review.drop_table()
    Service.drop_table()
    print("Tables dropped.")

def add_review():
    customer_name = input("Enter customer name: ")
    rating = int(input("Enter rating (1-5): "))
    feedback = input("Enter feedback: ")
    review = Review(customer_name, rating, feedback)
    review.save()
    print(f"Review by '{customer_name}' added.")

def add_service():
    name = input("Enter service name: ")
    service = Service(name)
    service.save()
    print(f"Service '{name}' added.")

def list_reviews():
    reviews = Review.fetch_all_reviews()
    for review in reviews:
        print(review['id'], review['customer_name'], review['rating'], review['feedback'])

def list_services():
    services = Service.fetch_all_services()
    for service in services:
        print(service['id'], service['name'])

def main():
    parser = argparse.ArgumentParser(description="Manage reviews and services for Naffy Interiors.")
    parser.add_argument('action', choices=['init', 'drop', 'add_review', 'add_service', 'list_reviews', 'list_services'], help="Action to perform")

    args = parser.parse_args()

    if args.action == 'init':
        initialize_db()
    elif args.action == 'drop':
        drop_db()
    elif args.action == 'add_review':
        add_review()
    elif args.action == 'add_service':
        add_service()
    elif args.action == 'list_reviews':
        list_reviews()
    elif args.action == 'list_services':
        list_services()

if __name__ == "__main__":
    main()
