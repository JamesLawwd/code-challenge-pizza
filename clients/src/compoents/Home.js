import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/restaurants");
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data);
        } else {
          console.error("Failed to fetch restaurants");
        }
      } catch (error) {
        console.error("Error while fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/restaurants/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setRestaurants((prevRestaurants) =>
          prevRestaurants.filter((restaurant) => restaurant.id !== id)
        );
      } else {
        console.error("Failed to delete restaurant");
      }
    } catch (error) {
      console.error("Error while deleting restaurant:", error);
    }
  };

  return (
    <section className="container">
      {restaurants.map((restaurant) => (
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

export default Home;
