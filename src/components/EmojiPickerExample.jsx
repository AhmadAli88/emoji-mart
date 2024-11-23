
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const EmojiPickerExample = () => {
  const handleEmojiSelect = (emoji) => {
    console.log("Selected emoji:", emoji);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>Emoji Picker Example</h3>
      <Picker data={data} onEmojiSelect={handleEmojiSelect} />
    </div>
  );
};

export default EmojiPickerExample;
