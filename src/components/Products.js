import React, { useEffect, useState } from "react";

const Products = () => {
  const [user, setUser] = useState([]);
  const [filter, setFilter] = useState([]);
  let [category, setcategory] = useState([]);
  const [showButton, setButton] = useState(true);
  const [search, setSearch] = useState("");

  function fetchProducts() {
    setButton(!showButton);
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((values) => {
        setUser(values);
      })
      .catch((err) => console.log(err));
  }

  const SearchProducts = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filterData = user.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setFilter(filterData);
    // console.log(search);
  }, [search]);

  useEffect(() => {
    let data = [];
    user.forEach((item) => {
      data.push(item.category);
    });
    setcategory([...new Set(data)]);
    setFilter(user);
    // console.log(data);
  }, [user]);

  return (
    <>
      <div>
        <input type="text" className="form" onChange={SearchProducts} />
        <select>
          {category.map((types) => (
            <>
              <option>{types}</option>
            </>
          ))}
        </select>
      </div>
      <div className="main">
        {filter.map((list) => (
          <div className="images">
            <h3 className="prd-Names">{list.title}</h3>
            <img className="img" src={list.image} />
            <small className="price" style={{ fontSize: "15px" }}>
              PRICE : 💲{list.price}{" "}
            </small>
            <p className="desc">{list.description}</p>
          </div>
        ))}
      </div>

      {showButton && (
        <button className="button" onClick={fetchProducts}>
          Show Productse
        </button>
      )}
    </>
  );
};

export default Products;
