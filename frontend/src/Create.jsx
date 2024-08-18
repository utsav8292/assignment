import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Create() {
  const [user, setUser] = useState({
    title: "",
    description: "",
    link: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/user/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        setUser({ title: "", description: "", link: "" });
        navigate("/");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Title</label>
        <input
          className="box4"
          type="text"
          name="title"
          value={user.title}
          onChange={handleInput}
          placeholder="Enter Your Title"
        />

        <label htmlFor="description">Last Name</label>
        <input
          className="box4"
          type="text"
          name="description"
          value={user.description}
          onChange={handleInput}
          placeholder="Enter Your Description"
        />

        <label htmlFor="link">Last Name</label>
        <input
          className="box4"
          type="text"
          name="link"
          value={user.link}
          onChange={handleInput}
          placeholder="Link"
        />
        <button type="submit" className="btn" onClick={() => navigate("/")}>
          Back
        </button>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
