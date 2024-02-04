"use client";
import React, { useState } from 'react';

export default function UploadPage() {
  const [downloadClickCount, setDownloadClickCount] = useState(0);
  const [buttonTopMargin, setButtonTopMargin] = useState(0);
  const [showUploadInput, setShowUploadInput] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [fileUploaded, setFileUploaded] = useState(false);

  const encouragingMessages = [
    "Hi! Can you add one more picture?",
    "Your doing fantastic! Add just one more picture!",
    "Keep on goin, your almost there! One more picture pls",
    "I think I asked for one more picture, but I'm not sure. Can you add one more?",
    "Almoust there!!",
  ];


  const handleDownloadClick = () => {
    const newClickCount = downloadClickCount + 1;
    setDownloadClickCount(newClickCount);

    setButtonTopMargin(currentMargin => currentMargin + 10);

    if (newClickCount >= 5) {
      setShowUploadInput(true);
    }
  };

  const handleFileChange = (event: any) => {
    setFileUploaded(true);
    setButtonTopMargin(currentMargin => currentMargin + 40);
    const file = event.target.files[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
      const scrambledName = generateRandomString(6) + '.jpegg';
      console.log(`Scrambled filename: ${scrambledName}`);

      // Update the message index to cycle through the encouraging messages
      setMessageIndex((currentMessageIndex) => (currentMessageIndex + 1) % encouragingMessages.length);
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
      <p className="absolute top-7 left-0">...a creative collaboration between Tiff, Angela, Soham.</p>
      <p className="absolute bottom-5 left-5">..secretly stealing your data........</p>
      <div className="absolute" style={{ top: '40%', left: '40%' }}>
        <div className="flex flex-row space-x-8 items-start">
          <button className="bg-[#FF0000] text-white">
            <h1 className="text-6xl uppercase">Upload</h1>
          </button>
          <button onClick={handleDownloadClick} style={{ marginTop: `${buttonTopMargin}px` }}>
            <h1 className="text-sm">download</h1>
          </button>
        </div>
        {showUploadInput && (
          <input type="file" onChange={handleFileChange} />
        )}
        {fileUploaded && <p className="text-white mt-4">{encouragingMessages[messageIndex]}</p>}
      </div>
    </div>
  );
}
