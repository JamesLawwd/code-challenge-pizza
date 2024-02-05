import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomPizzaForm from "./CustomPizzaForm";

function RestaurantDetails() {
  const [{ data: restaurant, error, status }, setRestaurantDetails] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`/restaurants/${id}`).then((response) => {
      if (response.ok) {
        response.json().then((restaurantDetails) =>
          setRestaurantDetails({
            data: restaurantDetails,
            error: null,
            status: "resolved",
          })
        );
      } else {
        response.json().then((err) =>
          setRestaurantDetails({
            data: null,
            error: err.error,
            status: "rejected",
          })
        );
      }
    });
  }, [id]);

  function handleNewPizzaAddition(newPizza) {
    setRestaurantDetails({
      data: {
        ...restaurant,
        pizzas: [...restaurant.pizzas, newPizza],
      },
      error: null,
      status: "resolved",
    });
  }

  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

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
        <CustomPizzaForm
          restaurantId={restaurant.id}
          onAddNewPizza={handleNewPizzaAddition}
        />
      </div>
    </section>
  );
}

export default RestaurantDetails;
