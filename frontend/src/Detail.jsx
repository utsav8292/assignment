import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const Detail = () => {
    const params = useParams();
    const tit= params.title;
   const [ser, setSer] = useState("");


    const ContactById = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/user/cards/${tit}`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setSer(data)
        } 
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
    ContactById();
    }, []);

  return (
    <div className="container">
          <div className="category-list">
            <div>
              <h2 className="box">{ser.title}</h2>
              <hr />
              <p className="para">{ser.description}</p>
            </div>
          </div>
    </div>
  );
}

export default Detail