import React from "react";
import { useState } from "react";

const Map = ({ items }) => {
  const [isActive, setIsActive] = useState(false);

  const [toggledItems, setToggledItems] = useState({});


  const toggleSwitch = () => {
    setIsActive((prevState) => !prevState);
  };
  
  const toggleIcon = (index) => {
    setToggledItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div
      className="card-container"
      style={{
        width: "80%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        borderRadius: "20px",
        justifyContent: "center", // Centers grid items horizontally
        alignItems: "center", // Centers grid items vertically
        margin: "0 auto"
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{
            padding: "20px",
            borderRadius: "20px",
            backgroundColor:" rgba(128, 128, 128,0.2 )" /* Gray with 50% opacity */

,
          
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <img
                style={{ paddingTop: "22px" }}
                src={item.icon}
                alt=""
                className="card-icon"
              />
            </div>
            <div style={{textAlign:'left',color:'white'}}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "hsl(227, 75%, 14%)",
                height: "40px",
                marginTop: "32px",
                color: "white",
                padding:"10px"
              }}
            >

              Remove
            </button>
            <img
              style={{
                width: "60px",
                borderRadius: "20px",
                height: "50px",
                marginTop: "30px",
              }}
              src={toggledItems[index] ? "/rety.png" : "/retx.png"}
                alt="Toggle Icon"
                onClick={() => toggleIcon(index)}
              className="switch-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Map;
