"use client";
import React, { useState } from 'react';

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [showFirstButton, setShowFirstButton] = useState(true);
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  const handleFirstButtonClick = () => {
    console.log("First button clicked");
    setClickCount(prevCount => prevCount + 1);

    const newTop = Math.random() * 80 + '%';
    const newLeft = Math.random() * 80 + '%';
    setButtonPosition({ top: newTop, left: newLeft });

    if (clickCount >= 2) {
      setShowFirstButton(false);
      setTimeout(() => {
        setShowSecondButton(true);
      }, 1000);
    }
  };

  const handleSecondButtonClick = () => {
    console.log("Second button clicked");
  };

  return (
    <div className="h-screen bg-black" style={{ 
      animation: "fireworks 0.5s linear infinite", 
      color: '#00FF00', 
      fontFamily: 'Comic Sans MS',
      display: 'flex',
      position: 'relative', // Needed for absolute positioning of children
    }}>
      <p className="absolute top-7 left-0">...a creative collaboration between Tiff, Angela, Soham.</p>
      <h1 className="text-5xl" style={{
        transform: 'rotate(79deg)',
        position: 'relative',
        left: '20%',
        top: '-20%',
      }}>Phot Llab</h1>
      <h2 className="text-2xl relative" style={{ left: '20%', top: '34%' }}>
        <span className="bg-yellow-700" style={{ fontFamily: 'Papyrus, Fantasy' }}>Lets see your <span className="text-6xl">UGLIEST</span> photgrph</span>y
      </h2>
      <div className="flex flex-col items-center justify-center z-50">
        {showFirstButton && (
          <button
            onClick={handleFirstButtonClick}
            style={{ 
              backgroundColor: '#FF0000', 
              borderColor: 'black', 
              borderWidth: '6px', 
              borderStyle: 'solid', 
              color: '#FFFFFF', 
              marginTop: '10px',
              position: 'absolute',
              top: buttonPosition.top,
              left: buttonPosition.left,
              transform: 'translate(-50%, -50%)'
            }}
          >
            Click HERE
          </button>
        )}
        {showSecondButton && (
          <a
            href="/upload"
            className="text-6xl uppercase"
            style={{ 
              backgroundColor: '#FFFFFF', 
              borderColor: 'black', 
              borderWidth: '6px', 
              borderStyle: 'solid', 
              color: '#FF0000', 
              marginTop: '10px',
              position: 'absolute',
              top: '50%', 
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            SORRRY! Only one entry per person
          </a>
        )}
      </div>
    </div>
  );
}
