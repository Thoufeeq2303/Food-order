import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './order.css'
import { FaCartShopping } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useCart } from "../CartContext.jsx";

const Order = () => {

  const { cart, increase, decrease } = useCart(); 
  const [search, setSearch] = useState("");
  const [food, setFood] = useState([]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetch("http://localhost:4501/getFood")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setFood(data)
      })
  }, []);

  const renderItems = (category) => (
    food
      .filter(item => item.category === category)
      .map(item => {
        const itemCount = cart[item._id]?.qty || 0;

        return (
          <div className='col-lg-4' key={item._id}>
            <div className='card'>
              <div className='card-body'>
                <img className='food-pic' src={item.image} alt='...' />
                <div className='food-name'>{item.name}</div>
                <div className='food-cost'>
                  <MdCurrencyRupee /> {item.price}/-
                </div>
                <div className='food-rate'>
                  <FaStar /> {item.rating}
                </div>
                <div className='food-des'>{item.des}</div>

                {itemCount === 0 ? (
                  <button
                    className='add-btn'
                    onClick={() => increase(item)} 
                  >
                    ADD
                  </button>
                ) : (
                  <div className='Counter'>
                    <button onClick={() => decrease(item._id)}>-</button>
                    <span>{itemCount}</span>
                    <button onClick={() => increase(item)}>+</button>
                  </div>
                )}

              </div>
            </div>
          </div>
        );
      })
  );

  return (
    <div>
      <div className='navi'>
        {[
          ["shaw","Shawarma"],
          ["kebab","Kebab"],
          ["alf","Barbeques"],
          ["grill","Grill"],
          ["chiman","Chicken Mandhi"],
          ["muman","Mutton Mandhi"],
          ["plat","Platter"],
          ["kuna","Kunafa"],
          ["milk","Milk Shakes"],
          ["dess","Desserts"]
        ].map(([id,label]) => (
          <div key={id} className='menu-list' onClick={() => scrollToSection(id)}>
            {label}
          </div>
        ))}

        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />

        <Link to="/cart" className='buy'>
          <FaCartShopping />
        </Link>
      </div>
      <div className='order'>

        {["shaw","kebab","alf","grill","chiman","muman","plat","kuna","milk","dess"]
          .filter(cat => cat.includes(search))
          .map(cat => (
            <React.Fragment key={cat}>
              <div className='name-1' id={cat}>{cat.toUpperCase()}</div>
              <div className='container'>
                <div className='row'>
                  {renderItems(cat)}
                </div>
              </div>
            </React.Fragment>
          ))
        }

      </div>

    </div>
  )
}

export default Order;
