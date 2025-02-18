import React from 'react'

function Footer() {
  return (
    
      <div style={{ padding: "40px", backgroundColor: "#f8f8f8" }}>
      <footer style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        padding: "40px",
        backgroundColor: "#fff",
        borderTop: "1px solid #ddd",
        color: "#000"
      }}>
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>Service Times</h4>
          <p style={{ color: "#000" }}>Wed 5:30pm</p>
          <p style={{ color: "#000" }}>Sat 5:30pm</p>
          <p style={{ color: "#000" }}>Sun 10:00am</p>
        </div>
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>Contact</h4>
          <p style={{ color: "#000" }}>(000) 000-0000</p>
          <p style={{ color: "#000" }}>info@lifehouse.church</p>
          <p style={{ color: "#000" }}>Contact Us</p>
        </div>
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>Location</h4>
          <p style={{ color: "#000" }}>1600 Pennsylvania Avenue NW</p>
          <p style={{ color: "#000" }}>Washington, DC 20500</p>
        </div>
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>Stay Connected</h4>
          <input type="email" placeholder="name@email.com" style={{ padding: "8px", width: "70%" }} />
          <button style={{ padding: "8px 12px", backgroundColor: "#000", color: "#fff", border: "none", marginLeft: "8px" }}>Subscribe</button>
          <p style={{ color: "#000" }}>Subscribe to our newsletter for updates.</p>
        </div>
      </footer>
      <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#fff", borderTop: "1px solid #ddd", color: "#000" }}>
        <p style={{ color: "#000" }}>&copy; 2025 Lifehouse Church. All Rights Reserved.</p>
        <p style={{ color: "#000" }}>Template by <strong>T.RICKS</strong></p>
        <p style={{ color: "#000" }}>Privacy Policy</p>
      </div>
    </div>
    
  )
}

export default Footer
