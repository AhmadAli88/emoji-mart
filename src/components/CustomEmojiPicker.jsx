import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const CustomEmojiPicker = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji.native); // Emoji character
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>Custom Emoji Picker</h3>
      <Picker
        data={data}
        onEmojiSelect={handleEmojiSelect}
        theme="dark" // Dark mode
        perLine={6} // Emojis per row
        emojiSize={20} // Size of emojis
        showPreview={false} // Disable preview
        showSkinTones={false} // Disable skin tone selector
      />
      {selectedEmoji && (
        <div style={{ marginTop: "20px", fontSize: "24px" }}>
          <strong>Selected Emoji:</strong> {selectedEmoji}
        </div>
      )}
    </div>
  );
};

export default CustomEmojiPicker;
