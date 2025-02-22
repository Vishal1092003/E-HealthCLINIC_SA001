import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function Qr() {
  const url = "https://www.youtube.com/@ratedaniket";

  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        display: "flex",
        flexDirection: "column", // Stack items vertically
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        border: "1px solid #ccc", // Optional: Add a border for visualization
        backgroundColor: "#f9f9f9", // Light background color
        borderRadius: "20px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      {/* QR Code */}
      <QRCodeSVG value={url} size={300} />

      {/* "Rated Aniket" Text */}
      <div
        style={{
          marginTop: "20px", // Space between QR code and text
          fontSize: "24px", // Text size
          fontWeight: "bold", // Bold text
          color: "#333", // Dark text color
          fontFamily: "'Poppins', sans-serif", // Stylish font
          textTransform: "uppercase", // Uppercase text
          letterSpacing: "2px", // Spacing between letters
          background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // Gradient background
          WebkitBackgroundClip: "text", // Clip background to text
          WebkitTextFillColor: "transparent", // Transparent text color
        }}
      >
        Rated Aniket
      </div>
    </div>
  );
}

export default Qr;