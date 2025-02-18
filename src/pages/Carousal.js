import React from 'react'
import { MdOutlineExpandMore } from "react-icons/md";
import { FaSort } from "react-icons/fa";
import imagesrc from "./salman khan.jpeg";

const imageSrcs = [
  `${imagesrc}`,
  `${imagesrc}`,
  `${imagesrc}`,
  `${imagesrc}`,
  `${imagesrc}`
];

const Carousel = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        height: '50vh',
        position: 'relative',
        backgroundColor: 'whitesmoke',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Top Right Box */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          color: 'black',
          padding: '8px 15px',
          borderRadius: '5px',
          zIndex: '10',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <span style={{ marginRight: '8px' }}>Sort</span>
        <FaSort />
      </div>

      {/* Carousel with Adjusted Width */}
      <div
        style={{
          display: 'flex',
          animation: 'slide 15s linear infinite',
          width: `${imageSrcs.length * 200 * 2}px`,
        }}
      >
        {/* Original and Duplicate for Seamless Loop */}
        {[...imageSrcs, ...imageSrcs].map((src, index) => (
          <div
            key={index}
            style={{
              height: '100%',
              width: '200px',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10px',
              overflow: 'hidden',
              backgroundColor: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              marginRight: '20px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for scale and shadow
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.3) translateZ(50px)'; // Popping effect
              e.currentTarget.style.boxShadow = '8px 8px 16px rgba(0, 0, 0, 0.3)'; // Enhance shadow on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateZ(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Reset shadow
            }}
          >
            {/* Image Container */}
            <div
              style={{
                height: '75%',
                width: '100%',
                overflow: 'hidden',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              }}
            >
              <img
                src={src}
                alt="product"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              />
            </div>

            {/* Category Text */}
            <div
              style={{
                height: '25%',
                width: '100%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#333',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            >
              Category: This is great
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${imageSrcs.length * 220}px);
            }
          }
        `}
      </style>

      {/* Bottom Mid Box */}
      <div
        style={{
          position: 'absolute',
          height: "20px",
          width: "10px",
          color: "black",
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <MdOutlineExpandMore
          style={{
            fontSize: '2rem', 
            color: 'black',
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
