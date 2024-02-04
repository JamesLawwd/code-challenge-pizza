import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PizzaForm from "./PizzaForm";

function Home() {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState({
    data: null,
    error: null,
    status: "pending",
  });

  useEffect(() => {
    fetch(`/restaurants/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((err) => Promise.reject(err.error));
        }
      })
      .then((restaurant) =>
        setRestaurantData({ data: restaurant, error: null, status: "resolved" })
      )
      .catch((error) =>
        setRestaurantData({ data: null, error: error, status: "rejected" })
      );
  }, [id]);

  function handleAddPizza(newPizza) {
    setRestaurantData((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        pizzas: [...prevData.data.pizzas, newPizza],
      },
    }));
  }

  const { data: restaurant, error, status } = restaurantData;

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error}</h1>;

  return (
    <section className="container">
      <div className="card">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.address}</p>
      </div>
      <div className="card">
        <h2>Pizza Menu</h2>
        {restaurant.pizzas.map((pizza) => (
          <div key={pizza.id}>
            <h3>{pizza.name}</h3>
            <p>
              <em>{pizza.ingredients}</em>
            </p>
          </div>
        ))}
      </div>
      <div className="card">
        <h3>Add New Pizza</h3>
        <PizzaForm restaurantId={restaurant.id} onAddPizza={handleAddPizza} />
      </div>
    </section>
  );
}

export default Home;
