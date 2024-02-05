import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RestaurantList() {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetch("/restaurants")
      .then((response) => response.json())
      .then(setRestaurantList);
  }, []);

  function handleDelete(id) {
    fetch(`/restaurants/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setRestaurantList((restaurants) =>
          restaurants.filter((restaurant) => restaurant.id !== id)
        );
      }
    });
  }

  return (
    <section className="container">
      {restaurantList.map((restaurant) => (
        <div key={restaurant.id} className="card">
          <h2>
            <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
          </h2>
          <p>Address: {restaurant.address}</p>
          <button onClick={() => handleDelete(restaurant.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default RestaurantList;
