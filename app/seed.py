from flask_sqlalchemy import SQLAlchemy
from faker import Faker
from datetime import datetime, timezone
from models import db, Restaurant, Pizza,RestaurantPizza
from app import app as flask_app  # Renaming app to flask_app to avoid conflicts

fake = Faker()
flask_app.app_context().push()

# Function to create fake data and add to the database
def seed_data():
    # Clear existing data
    db.session.query(RestaurantPizza).delete()
    db.session.query(Restaurant).delete()
    db.session.query(Pizza).delete()
    db.session.commit()

    # Create Restaurants
    new_restaurant1 = Restaurant(name='New Restaurant A', address='123 New Main St')
    new_restaurant2 = Restaurant(name='New Restaurant B', address='456 New Oak St')

    # Create Pizzas
    new_pizza1 = Pizza(name='New Margherita', ingredients='New Tomato, New Mozzarella, New Basil')
    new_pizza2 = Pizza(name='New Pepperoni', ingredients='New Pepperoni, New Cheese, New Tomato Sauce')

    # Add Restaurants and Pizzas to the session
    db.session.add_all([new_restaurant1, new_restaurant2, new_pizza1, new_pizza2])
    db.session.commit()

    # Create Restaurant_pizzas (Associations)
    new_association1 = RestaurantPizza(restaurant=new_restaurant1, pizza=new_pizza1, price=15)
    new_association2 = RestaurantPizza(restaurant=new_restaurant1, pizza=new_pizza2, price=18)
    new_association3 = RestaurantPizza(restaurant=new_restaurant2, pizza=new_pizza1, price=16)

    # Add Restaurant_pizzas to the session
    db.session.add_all([new_association1, new_association2, new_association3])
    db.session.commit()

if __name__ == '__main__':
    seed_data()
    print("New seed completed")