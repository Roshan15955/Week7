import React, { useState } from "react";
const TextToEmoji = () => {
  const [inputValue, setInputValue] = useState("");
  const [emojiImage, setEmojiImage] = useState("");

  // Mapping of input keywords to emoji images
  const emojiMap = {
    happy:"https://png.pngtree.com/png-vector/20240811/ourmid/pngtree-3d-laughing-emoticon-imoji-png-image_13443115.png",
    like: "https://st.depositphotos.com/1001911/1554/v/450/depositphotos_15540341-stock-illustration-thumb-up-emoticon.jpg",  
    sad: "https://png.pngtree.com/png-vector/20240604/ourmid/pngtree-art-clip-of-cute-sad-emoji-with-tears-on-transparent-background-png-image_12618545.png"  
  };

  const handleChange = (event) => {
    const value = event.target.value.trim();
    setInputValue(value);

    // Update emoji image based on the input
    if (emojiMap[value]) {
      setEmojiImage(emojiMap[value]);
    } else {
      setEmojiImage("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React Emoji Display</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type happy, like, or sad"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "20px",
        }}
      />
      <div>
        {emojiImage ? (
          <img
            src={emojiImage}
            alt={inputValue}
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        ) : (
          <p>Type a valid keyword to display the image</p>
        )}
      </div>
    </div>
  );
};

export default TextToEmoji;
