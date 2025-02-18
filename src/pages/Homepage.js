import React, { useState ,useRef,useEffect} from "react";
import styled, { keyframes } from 'styled-components';
import Carousal_mainsection from "./Carousal_mainsection";
import Footer from "./Footer";
import imageSrc from './salman khan.jpeg'
import img1 from "./img3 (1).jpg"
import img2 from "./img3 (2).jpg"
import img3 from "./img3 (3).jpg"
import Carousel from "./Carousal";


function Homepage() {
    const runnerRef = useRef(null);

  // useEffect(() => {
  //   const runner = runnerRef.current;
  //   let position = 0;
  //   const speed = 2; // Speed of the animation

  //   const animate = () => {
  //     position += speed;
  //     if (position > window.innerWidth) {
  //       position = -100; // Reset position after exiting screen
  //     }
  //     runner.style.left = `${position}px`;
  //     requestAnimationFrame(animate);
  //   };

  //   animate();
  // }, []);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const events = [
  { title: "First Sunday of the Month Kickoff", date: "Jun. 09-12, 2021", time: "8:30 AM - 9:30 PM", image: img2 },
  { title: "Serve Day for Our Community", date: "Jun. 10-13, 2021", image: img1 },
  { title: "Prayer Night Gathering", date: "Jul. 05-07, 2021", image: img3 },
  { title: "Youth Worship Night", date: "Jul. 15, 2021", image: img1 }, // Corrected
  { title: "Charity Fundraiser Marathon", date: "Aug. 20, 2021", image: img2 }
];
  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };
 

  return (
    <div style={{ backgroundColor: "", color: "Black", minHeight: "100vh", padding: "20px",fontFamily:"",}}>
      {/* Navbar */}

    <nav style={{ 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center", 
  padding: "10px 50px", 
  position: "relative",
  // "backgroundColor":"whitesmoke"
  
//   backgroundColor: "#1a1a1a"
}}>
  <h2 style={{ 
    fontSize: "24px", 
    fontWeight: "bold", 
    fontFamily: "cursive", 
    letterSpacing: "2px", 
    background: "linear-gradient(90deg, #ff7e5f, #feb47b)", 
    WebkitBackgroundClip: "text",
    color: "transparent",
    textShadow: "2px 2px 5px rgba(255, 126, 95, 0.5)"
  }}>
    CHITRABINDOO
  </h2>
  <div style={{ display: "flex", gap: "20px", position: "relative", color: "black",  }}>
    {["ABOUT", "GET INVOLVED", "MINISTRIES", "EVENTS", "GIVING"].map((menu, index) => (
      <div key={index} style={{ position: "relative" , color: "black", }} onMouseEnter={() => handleMouseEnter(menu)} onMouseLeave={handleMouseLeave}>
        <a href="#" style={{ 
          textDecoration: "none", 
          color: "black", 
          fontWeight: hoveredMenu === menu ? "bold" : "normal", 
          transition: "0.3s ease-in-out" 
        }}>
          {menu} {menu === "GET INVOLVED" || menu === "MINISTRIES" ? "▼" : ""}
        </a>
      </div>
    ))}
  </div>
  <div>
    <button style={{ 
    backgroundColor: "white", 
    color: "black", 
    padding: "10px 20px", 
    borderRadius: "8px", 
    border: "none", 
    fontWeight: "bold", 
    cursor: "pointer", 
    transition: "0.3s ease-in-out",
    boxShadow: "2px 2px 10px rgba(255, 255, 255, 0.2)"
  }}>
    Sign Up
  </button>
   <button style={{ 
    margin:"10px",
    backgroundColor: "white", 
    color: "black", 
    padding: "10px 20px", 
    borderRadius: "8px", 
    border: "none", 
    fontWeight: "bold", 
    cursor: "pointer", 
    transition: "0.3s ease-in-out",
    boxShadow: "2px 2px 10px rgba(255, 255, 255, 0.2)"
  }}>
    Login
  </button>
  </div>
 
</nav>


      {/* Main Section */}
     <Carousal_mainsection/>
 


   
   <Carousel/>

   <Footer/>












   {/* <div style={{ display: "flex", gap: "20px", overflowX: "auto","backgroundColor":"whitesmoke","color":"black", "backgroundColor":"whitesmoke" }}>
  {events.map((event, index) => (
    <div key={index} style={{ width: "300px", flexShrink: 0 }}>
      <img src={event.image} alt={event.title} style={{ width: "80%" ,height:"60%"}} />
      <h3>{event.title}</h3>
      <p>📅 {event.date}</p>
      {event.time && <p>⏰ {event.time}</p>}
    </div>
  ))}
</div> */}

      {/* Our Mission Section */}
      {/* <div style={{ backgroundColor: "#f5f5f5", color: "black", padding: "80px 50px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "30px" }}>Our Mission</h2>
        <p style={{ fontSize: "20px", maxWidth: "900px", marginBottom: "30px", lineHeight: "1.6" }}>
          The mission of Lifehouse Church is all about spreading the Gospel of Jesus Christ.
          We won’t stop serving, loving, and giving until every heart is turned towards Christ.
        </p>
        <div style={{ display: "flex", justifyContent: "center", width: "100%", maxWidth: "900px" }}>
          <img src="/path-to-your-mission-image.jpg" alt="Our Mission" style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }} />
        </div>
      </div> */}
       {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f8f8f8" }}>
      <div style={{ 
        position: "relative", 
        width: "90%", 
        height: "55vh", 
        borderRadius: "12px", 
        overflow: "hidden", 
        backgroundColor: "#000" 
      }}>
        <img src={imageSrc} alt="Sermon" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: "50%", left: "5%", transform: "translateY(-50%)", color: "white" }}>
          <button style={{ backgroundColor: "#333", color: "white", padding: "8px 16px", borderRadius: "20px", border: "none", fontSize: "14px" }}>
            Latest Sermon
          </button>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", margin: "10px 0" }}>More Than Miracles</h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button style={{ backgroundColor: "#5c6cff", color: "white", padding: "12px 25px", borderRadius: "8px", border: "none", fontSize: "16px", cursor: "pointer" }}>
              Watch Sermon
            </button>
            <button style={{ backgroundColor: "white", color: "black", padding: "12px 25px", borderRadius: "8px", border: "none", fontSize: "16px", cursor: "pointer" }}>
              All Sermons
            </button>
          </div>
        </div>
      </div>
    </div> */}

{/* next */}
 {/* <div style={{ padding: "40px", backgroundColor: "#f8f8f8" }}>
      <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>Ministries</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(2, 1fr)", 
        gap: "20px", 
        justifyContent: "center",
        alignItems: "center" 
      }}>
        {["Children's Ministry", "Youth", "Young Adults", "Lifehouse Worship"].map((title, index) => (
          <div key={index} style={{ 
            position: "relative", 
            borderRadius: "12px", 
            overflow: "hidden", 
            backgroundColor: "#000" 
          }}>
            <img src={imageSrc} alt={title} style={{ 
              width: "100%", 
              height: "250px", 
              objectFit: "cover", 
              display: "block", 
              opacity: "0.7" 
            }} />
            <div style={{ 
              position: "absolute", 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)", 
              color: "white", 
              fontSize: "24px", 
              fontWeight: "bold" 
            }}>
              {title}
            </div>
          </div>
        ))}
      </div>
    </div> */}

 
    </div>
   
  );
}

export default Homepage;
