"use client";
import React, { useState } from 'react';

export default function Home() {

  const [showFirstButton, setShowFirstButton] = useState(true);
  const [showSecondButton, setShowSecondButton] = useState(false);

  const handleFirstButtonClick = () => {
    console.log("First button clicked");
    setTimeout(() => {
      setShowFirstButton(false);
    }, 2000);
    setTimeout(() => {
      setShowSecondButton(true);
    }, 4000);
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
    }}>
      {/* <a href="/test">Test</a> */}
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
            style={{ backgroundColor: '#FF0000', borderColor: 'black', borderWidth: '6px', borderStyle: 'solid', color: '#FFFFFF', marginTop: '10px' }}
          >
            Click HERE
          </button>
        )}
        {showSecondButton && (
          <button
            onClick={handleSecondButtonClick}
            style={{ backgroundColor: '#FF0000', borderColor: 'black', borderWidth: '6px', borderStyle: 'solid', color: '#FFFFFF', marginTop: '10px' }}
          >
            SORRRY! Only one entry per person
          </button>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
      
      </div>
    </div>
  );
}
