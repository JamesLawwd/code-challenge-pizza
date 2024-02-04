from app import db, Eatery, Dish, EateryDish

def seed_data():
    # Create sample data
    eatery1 = Eatery(name='Tasty Bites', location='123 Delicious St, Foodtown, USA')
    eatery2 = Eatery(name='Pizza Haven', location='456 Yummy St, Flavortown, USA')
    eatery3 = Eatery(name='Slice Euphoria', location='789 Tasty St, Savorville, USA')
    eatery4 = Eatery(name='Crust Symphony', location='101 Gourmet St, Flavorville, USA')
    eatery5 = Eatery(name='Munch & Mingle', location='202 Savory St, Tasteville, USA')
    eatery6 = Eatery(name='Dough Delights', location='303 Zesty St, Tastetown, USA')
    eatery7 = Eatery(name='Top Toppings', location='404 Flavor St, Savorville, USA')
    eatery8 = Eatery(name='Artisan Flavors', location='505 Culinary St, Tasteville, USA')
    eatery9 = Eatery(name='Classic Eats', location='606 Savory St, Foodtown, USA')
    eatery10 = Eatery(name='Gourmet Delights', location='707 Yummy St, Flavorville, USA')

    dish1 = Dish(name='Cheese Delight', ingredients='Dough, Tomato Sauce, Cheese')
    dish2 = Dish(name='Pepperoni Supreme', ingredients='Dough, Tomato Sauce, Cheese, Pepperoni')
    dish3 = Dish(name='Veggie Delight', ingredients='Dough, Tomato Sauce, Cheese, Veggies')
    dish4 = Dish(name='Margherita Magic', ingredients='Dough, Tomato Sauce, Fresh Mozzarella, Basil')
    dish5 = Dish(name='Hawaiian Bliss', ingredients='Dough, Tomato Sauce, Cheese, Ham, Pineapple')
    dish6 = Dish(name='BBQ Chicken Feast', ingredients='Dough, BBQ Sauce, Cheese, Chicken, Onions')
    dish7 = Dish(name='Supreme Delight', ingredients='Dough, Tomato Sauce, Cheese, Various Toppings')
    dish8 = Dish(name='White Wonder', ingredients='Dough, Olive Oil, Garlic, Ricotta, Spinach')
    dish9 = Dish(name='Mushroom Magic', ingredients='Dough, Tomato Sauce, Cheese, Mushrooms, Truffle Oil')
    dish10 = Dish(name='Pesto Perfection', ingredients='Dough, Pesto Sauce, Cheese, Tomatoes, Arugula')

    # Commit the data to the database
    db.session.add_all([
        eatery1, eatery2, eatery3, eatery4, eatery5,
        eatery6, eatery7, eatery8, eatery9, eatery10,
        dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8, dish9, dish10
    ])
    db.session.commit()

    # Create EateryDish instances with prices
    eatery_dish1_1 = EateryDish(eatery=eatery1, dish=dish1, cost=15)
    eatery_dish1_2 = EateryDish(eatery=eatery1, dish=dish2, cost=20)
    eatery_dish2_2 = EateryDish(eatery=eatery2, dish=dish2, cost=25)
    eatery_dish3_3 = EateryDish(eatery=eatery3, dish=dish3, cost=18)
    eatery_dish4_4 = EateryDish(eatery=eatery4, dish=dish4, cost=22)
    eatery_dish5_5 = EateryDish(eatery=eatery5, dish=dish5, cost=21)
    eatery_dish6_6 = EateryDish(eatery=eatery6, dish=dish6, cost=24)
    eatery_dish7_7 = EateryDish(eatery=eatery7, dish=dish7, cost=28)
    eatery_dish8_8 = EateryDish(eatery=eatery8, dish=dish8, cost=26)
    eatery_dish9_9 = EateryDish(eatery=eatery9, dish=dish9, cost=20)
    eatery_dish10_10 = EateryDish(eatery=eatery10, dish=dish10, cost=23)

    # Commit the EateryDish instances to the database
    db.session.add_all([
        eatery_dish1_1, eatery_dish1_2, eatery_dish2_2,
        eatery_dish3_3, eatery_dish4_4, eatery_dish5_5,
        eatery_dish6_6, eatery_dish7_7, eatery_dish8_8,
        eatery_dish9_9, eatery_dish10_10
    ])
    db.session.commit()

if __name__ == '__main__':
    from app import app

    with app.app_context():
        db.create_all()
        seed_data()

print("🌮 Done seeding!")
