import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const FullEmojiPicker = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [emojiDetails, setEmojiDetails] = useState(null);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji.native); // Display the emoji character
    setEmojiDetails(emoji); // Store full emoji details
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h2>Emoji Picker with All Props</h2>
      <Picker
        data={data}
        onEmojiSelect={handleEmojiSelect}
        theme="dark" // Set theme to 'dark' or 'light'
        perLine={8} // Number of emojis per row
        emojiSize={30} // Size of each emoji (in pixels)
        showPreview={true} // Show preview of selected emoji
        showSkinTones={true} // Enable skin tone selector
        searchPosition="top" // Search bar position ('top' or 'none')
        categories={[
          "smileys", // Display specific categories
          "animals",
          "food",
          "flags",
        ]}
        defaultCategory="smileys" // Default category on load
      />

      {selectedEmoji && (
        <div style={{ marginTop: "20px", fontSize: "24px" }}>
          <strong>Selected Emoji:</strong> {selectedEmoji}
        </div>
      )}

      {emojiDetails && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <h4>Emoji Details:</h4>
          <pre>{JSON.stringify(emojiDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FullEmojiPicker;
