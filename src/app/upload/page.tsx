"use client";
import React, { useState } from 'react';

export default function UploadPage() {
  const [downloadClickCount, setDownloadClickCount] = useState(0);
  const [buttonTopMargin, setButtonTopMargin] = useState(0);
  const [showUploadInput, setShowUploadInput] = useState(false);

  const handleDownloadClick = () => {
    const newClickCount = downloadClickCount + 1;
    setDownloadClickCount(newClickCount);

    setButtonTopMargin(currentMargin => currentMargin + 10);

    if (newClickCount >= 5) {
      setShowUploadInput(true);
    }
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
      const scrambledName = generateRandomString(6) + '.jpegg';
      console.log(`Scrambled filename: ${scrambledName}`);
    }
  };
  

  const generateRandomString = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  return (
    <div className="h-screen bg-black" style={{ 
      animation: "fireworks 0.5s linear infinite", 
      color: '#00FF00', 
      fontFamily: 'Comic Sans MS',
      display: 'flex',
      position: 'relative',
    }}>
      <div className="absolute" style={{ top: '40%', left: '40%' }}>
        <div className="flex flex-row space-x-8 items-start">
          <button className="bg-[#FF0000] text-white">
            <h1 className="text-6xl">Upload</h1>
          </button>
          <button onClick={handleDownloadClick} style={{ marginTop: `${buttonTopMargin}px` }}>
            <h1 className="text-sm">Download</h1>
          </button>
        </div>
        {showUploadInput && (
            <input type="file" onChange={handleFileChange} />
        )}
      </div>
    </div>
  );
}
