import "./App.css";
import { useState } from "react";
import Map from "./map";


const items=[
  {
  icon:'/logo-devlens.svg',
  title:'DevLens',
  description:'Quickly inspect page layouts and  visualise element boundaries',
  isActive:true
   },
  {
  icon:'/logo-style-spy.svg',
  title:'Style Spy',
  description: "Instantly analyze and copy CSS from any webpage element.",
  isActive: true
   },
  {
  icon:'/logo-speed-boost.svg',
  title:'Speed Boost',
 description: "Optimizes browser resource usage to accelerate page loading.",
  isActive: false
   },
  {
  icon:'/logo-json-wizard.svg',
  title:'JSON Wizard',
  description: "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true
   },
  {
  icon:'/logo-tab-master-pro.svg',
  title:'Tab Master',
  description: "Organizes browser tabs into groups and sessions.",
  isActive: true
   },
  {
  icon:'/logo-viewport-buddy.svg',
  title:'Viewport Buddy',
  description: "Simulates various screen resolutions directly within the browser.",
  isActive: false
   },
  {
  icon:'/logo-markup-notes.svg',
  title:'Markup Notes',
  description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true
   },
  {
  icon:'/logo-grid-guides.svg',
  title:'Grid Guides',
  description: "Overlay customizable grids and alignment guides on any webpage.",
  isActive: false

   },
  {
  icon:'/logo-pallete-picker.svg',
  title:'Pallete Picker',
description: "Instantly extracts color palettes from any webpage.",
      isActive: true
   },
  {
  icon:'/logo-link-checker.svg',
  title:'Line Checker',
  description:'Quickly inspect page layouts and  visualise element boundaries'
   },
  {
  icon:'/logo-dom-snapshot.svg',
  title:'Dom Snapshot',
  description: "Capture and export DOM structures quickly.",
  isActive: false
   },
  {
  icon:'/console-plus.svg',
  title:'Console Plus',
  description: "Enhanced developer console with advanced filtering and logging.",
      isActive: true
  
   }
]

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div  style={{width:"100%",padding:'50px',backgroundColor:' hsl(227, 75%, 14%)' ,textAlign:'center'}}>
      <div style={{ display:'flex',justifyContent:'center' ,backgroundColor:'white'}}>
        {/* Left Icon */}
        <img
          src="/logo.svg"
          alt="Left Icon"
          style={{color:'white'
           
         
    }}
        />

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
          src="/icon-sun.svg"
          alt="Right Icon"
          style={{
          
    
       
            cursor: "pointer", // If it's a button (e.g., clear input)
          }}
        />
      </div>
      <div   style={{
           display:"flex",
           justifyContent:'space-between',
            paddingTop:'50px',
            paddingBottom:'50px',
            paddingRight:'200px',
            paddingLeft:'220px',
            
          }}>
        <p style={{fontWeight:'bold',color:'white',fontSize:'20px'}}>Extension List</p>
        <div style={{display:"flex",gap:'20px'}}>
          <div  style={{backgroundColor:'red',padding:'20px',paddingRight:'30px',paddingLeft:'30px',borderRadius:'30px'}}>All</div>
          <div    style={{backgroundColor:'gray',padding:'20px',paddingRight:'30px',paddingLeft:'30px',borderRadius:'30px',color:'white'}}>Active</div>
          <div  style={{backgroundColor:'gray',padding:'20px',paddingRight:'30px',paddingLeft:'30px',borderRadius:'30px',color:'white'}}>Inactive</div>
        </div>
      </div>
      

      <Map   style={{ position:'relative',left:'200px'}} items={items} />
     
      </div>
  );
}

export default App;
