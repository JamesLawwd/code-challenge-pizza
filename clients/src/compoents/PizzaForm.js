import React, { useEffect, useState } from "react";

function PizzaForm({ restaurantId, onAddPizza }) {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaId, setPizzaId] = useState("");
  const [price, setPrice] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("/pizzas")
      .then((response) => response.json())
      .then(setPizzas)
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      pizza_id: pizzaId,
      restaurant_id: restaurantId,
      price: parseInt(price, 10),
    };

    fetch("/restaurant_pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((err) => Promise.reject(err.errors));
        }
      })
      .then((newPizza) => {
        onAddPizza(newPizza);
        setFormErrors([]);
      })
      .catch((errors) => setFormErrors(errors));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pizza_id">Pizza:</label>
      <select
        id="pizza_id"
        name="pizza_id"
        value={pizzaId}
        onChange={(e) => setPizzaId(e.target.value)}
      >
        <option value="">Select a pizza</option>
        {pizzas.map((pizza) => (
          <option key={pizza.id} value={pizza.id}>
            {pizza.name}
          </option>
        ))}
      </select>
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {formErrors.length > 0 &&
        formErrors.map((err) => (
          <p key={err} style={{ color: "red" }}>
            {err}
          </p>
        ))}
      <button type="submit">Add To Restaurant</button>
    </form>
  );
}

export default PizzaForm;
