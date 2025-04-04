import "./App.css";
import { useState } from "react";

// Add an "id" property to each item
const initialExtensions = [
  {
    id: 0,
    icon: "/logo-devlens.svg",
    title: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries",
    isActive: false,
  },
  {
    id: 1,
    icon: "/logo-style-spy.svg",
    title: "Style Spy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    id: 2,
    icon: "/logo-speed-boost.svg",
    title: "Speed Boost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    id: 3,
    icon: "/logo-json-wizard.svg",
    title: "JSON Wizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    id: 4,
    icon: "/logo-tab-master-pro.svg",
    title: "Tab Master",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    id: 5,
    icon: "/logo-viewport-buddy.svg",
    title: "Viewport Buddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    id: 6,
    icon: "/logo-markup-notes.svg",
    title: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    id: 7,
    icon: "/logo-grid-guides.svg",
    title: "Grid Guides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    id: 8,
    icon: "/logo-pallete-picker.svg",
    title: "Pallete Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    id: 9,
    icon: "/logo-link-checker.svg",
    title: "Line Checker",
    description:
      "Quickly inspect page layouts and visualize element boundaries",
    isActive: true,
  },
  {
    id: 10,
    icon: "/logo-dom-snapshot.svg",
    title: "Dom Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    id: 11,
    icon: "/console-plus.svg",
    title: "Console Plus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("day");
  const [filter, setFilter] = useState("ALL");
  const [extensions, setExtensions] = useState(initialExtensions);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "day" ? "night" : "day"));
  };
  const handleFilter = (status) => {
    setFilter(status);
  };

  // Toggle the isActive property based on the unique id
  const toggleActive = (id) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const filteredItems = extensions.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (filter === "ALL") return matchesSearch;
    if (filter === "ACTIVE" && item.isActive) return matchesSearch;
    if (filter === "INACTIVE" && !item.isActive) return matchesSearch;
    return false;
  });
 // Define styles based on theme
 const backgroundColor = theme === "day" ? "hsl(0, 0%, 95%)" : "hsl(227, 75%, 14%)";
 const textColor = theme === "day" ? "#333" : "#fff";
 const headerBackground = theme === "day" ? "#fff" : "hsl(227, 75%, 14%)";
 const logoBackground = theme === "day" ? "hsl(227, 75%, 14%)": "#fff" ;




  return (
    <div
      style={{
     
        textAlign: "center",
        backgroundColor: backgroundColor, color: textColor,
        height: "1700px",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "50px",
           backgroundColor: headerBackground,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          backgroundColor: backgroundColor,
            alignItems: 'center'
          }}
        > <div style={{display:'flex', alignItems: 'center', textAlign: 'center'}}>
          {/* Left Icon */}
          <img
            style={{ width: "50px", height: "50px" }}
            src="/extensionlogo.jpeg"
            alt="Left Icon"
          />
          <p style={{ fontSize: "40px",color:textColor,fontWeight:"bold"}}>Extension</p></div>
          {/* Input Field */}
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Enter text"
            style={{
              height: "40px",
              fontSize: "16px",
              borderRadius: "10px",
              width: "1000px",
            }}
          />
          {/* Right Icon */}
          <img
            src={theme === "day" ? "/icon-sun.svg" : "/icon-moon.svg"}
            alt="Theme Toggle"
            onClick={toggleTheme}
            style={{ cursor: "pointer", width: "40px", height: "40px",  backgroundColor:logoBackground,}}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "50px",
            paddingBottom: "50px",
            paddingRight: "200px",
            paddingLeft: "220px",
            
          }}
        >
          <p style={{ fontWeight: "bold", color: textColor, fontSize: "20px" }}>
          Extension List
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <div
              onClick={() => handleFilter("ALL")}
              style={{
                backgroundColor: filter === "ALL" ? "red" : "gray",
                padding: "20px 30px",
                borderRadius: "30px",
                cursor: "pointer",
                color: "white",
              }}
            >
              All
            </div>
            <div
              onClick={() => handleFilter("ACTIVE")}
              style={{
                backgroundColor: filter === "ACTIVE" ? "red" : "gray",
                padding: "20px 30px",
                borderRadius: "30px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Active
            </div>
            <div
              onClick={() => handleFilter("INACTIVE")}
              style={{
                backgroundColor: filter === "INACTIVE" ? "red" : "gray",
                padding: "20px 30px",
                borderRadius: "30px",
                cursor: "pointer",
                color: "white",
              }}
            >
              Inactive
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="card-container"
        style={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          borderRadius: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          backgroundColor: backgroundColor,
          color: textColor
        }}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="card"
            style={{
              padding: "20px",
              borderRadius: "20px",
              backgroundColor: "rgba(128, 128, 128, 0.2)", // Gray with 50% opacity
              color: textColor
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
              <div style={{ textAlign: "left", color: textColor }}>
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
                  padding: "10px",
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
                src={item.isActive ? "/rety.png" : "/retx.png"}
                alt="Toggle Icon"
                onClick={() => toggleActive(item.id)}
                className="switch-icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
