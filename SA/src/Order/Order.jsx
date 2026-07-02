import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./order.css";
import { FaCartShopping } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useCart } from "../CartContext.jsx";

const Order = () => {
  const { cart, increase, decrease } = useCart();

  const [search, setSearch] = useState("");
  const [food, setFood] = useState([]);

  const categories = [
    { id: "shaw", label: "Shawarma" },
    { id: "kebab", label: "Kebab" },
    { id: "alf", label: "Barbeques" },
    { id: "grill", label: "Grill" },
    { id: "chiman", label: "Chicken Mandhi" },
    { id: "muman", label: "Mutton Mandhi" },
    { id: "plat", label: "Platter" },
    { id: "kuna", label: "Kunafa" },
    { id: "milk", label: "Milk Shakes" },
    { id: "dess", label: "Desserts" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetch("http://localhost:4501/getFood")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setFood(data);
      });
  }, []);

  const renderItems = (categoryId) => {
    return food
      .filter((item) => item.category === categoryId)
      .map((item) => {
        const itemCount = cart[item._id]?.qty || 0;

        return (
          <div className="col-lg-4" key={item._id}>
            <div className="card">
              <div className="card-body">
                <img className="food-pic" src={item.image} alt={item.name} />

                <div className="food-name">{item.name}</div>

                <div className="food-cost">
                  <MdCurrencyRupee /> {item.price}/-
                </div>

                <div className="food-rate">
                  <FaStar /> {item.rating}
                </div>

                <div className="food-des">{item.des}</div>

                {itemCount === 0 ? (
                  <button
                    className="add-btn"
                    onClick={() => increase(item)}
                  >
                    ADD
                  </button>
                ) : (
                  <div className="Counter">
                    <button onClick={() => decrease(item._id)}>-</button>
                    <span>{itemCount}</span>
                    <button onClick={() => increase(item)}>+</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      });
  };

  const filteredCategories = categories.filter((cat) =>
    cat.label.toLowerCase().includes(search)
  );

  return (
    <div>

      <div className="navi">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="menu-list"
            onClick={() => scrollToSection(cat.id)}
          >
            {cat.label}
          </div>
        ))}

        <input
          type="search"
          placeholder="Search category..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />

        <Link to="/cart" className="buy">
          <FaCartShopping />
        </Link>
      </div>

      <div className="order">
        {filteredCategories.map((cat) => (
          <React.Fragment key={cat.id}>
            <div className="name-1" id={cat.id}>
              {cat.label}
            </div>

            <div className="container">
              <div className="row">
                {renderItems(cat.id)}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};

export default Order;
