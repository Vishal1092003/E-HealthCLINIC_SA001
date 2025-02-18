import React from 'react'

function Carousal_mainsection() {
  return (
    <div>
              <div 

      style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "60vh",
    paddingLeft: "58px",
    position: "relative",
    marginBottom: "10px",
    backgroundColor: "whitesmoke",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow effect
    borderRadius: "10px" // Optional: rounded corners for a softer look
  }}>
  {/* Search Box at Top Middle */}
  <input 
    type="text" 
    placeholder="Search..." 
    style={{ 
      padding: "15px", 
      borderRadius: "8px", 
      border: "1px solid #ccc", 
      fontSize: "18px", 
      width: "50%", 
      position: "absolute", 
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)"
    }} 
  />

  <h1 style={{ fontSize: "50px", fontWeight: "bold", maxWidth: "500px", textAlign: "left" }}>
    A house of hope and healing
  </h1>
  <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
    <button style={{ backgroundColor: "#5c6cff", color: "white", padding: "12px 25px", borderRadius: "8px", border: "none", fontSize: "16px", cursor: "pointer" }}>
      I'm New
    </button>
    <button style={{ backgroundColor: "white", color: "black", padding: "12px 25px", borderRadius: "8px", border: "none", fontSize: "16px", cursor: "pointer" }}>
      Watch
    </button>
  </div>
</div>
    </div>
  )
}

export default Carousal_mainsection
