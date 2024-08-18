import React from "react";
import "./style.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import HelpHero from "./HelpHero";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  const inputHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const getServiceData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/cards`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceData();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <HelpHero /> */}
      <div className="help-hero">
        <h1 className="box1">How can we help?</h1>
        <form className="search-field">
          <input
            onChange={inputHandler}
            type="search"
            placeholder="Search"
            className="help-input"
          />
          <button className="submit-btn">Search</button>
        </form>
      </div>
      <div className="container">
        {services
          .filter((elem) => {
            if (elem === "") {
              return elem;
            } else {
              return elem.title.toLowerCase().includes(search);
            }
          })
          .map((data) => {
            return (
              <div key={data._id} className="category-list">
                <div>
                  <h2 className="box">{data.title}</h2>
                  <hr />
                  <p className="para">{data.description}</p>
                  <button
                    className="btn1"
                    onClick={() => navigate(`/detail/${data.title}`)}
                  >
                    click
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}
