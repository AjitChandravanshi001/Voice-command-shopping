import React, { useState } from "react";
import axios from "axios";

const VoiceAssistant = ({ setProducts, addToCart }) => {
  const [message, setMessage] = useState("Click the mic and say a command...");

  // 🗣️ Add this function here — right after the state line
  const speak = (text) => {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = async (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      setMessage(`You said: "${command}"`);
      speak(`You said ${command}`);

      if (command.includes("show") || command.includes("find")) {
        try {
          const res = await axios.get("http://localhost:4000/api/products");
          setProducts(res.data);
          setMessage("Here are the products I found!");
          speak("Here are the products I found!");
        } catch (err) {
          setMessage("Error fetching products.");
          speak("Sorry, I could not fetch the products.");
        }
      } else if (command.includes("add")) {
        const productName = command.replace("add", "").trim();
        const res = await axios.get("http://localhost:4000/api/products");
        const products = res.data;
        const product = products.find((p) =>
          p.name.toLowerCase().includes(productName)
        );
        if (product) {
          addToCart(product);
          setMessage(`${product.name} added to cart.`);
          speak(`${product.name} added to cart.`);
        } else {
          setMessage("Couldn't find that product.");
          speak("I couldn't find that product.");
        }
      } else {
        setMessage("Command not recognized. Try 'show products' or 'add phone'.");
        speak("Command not recognized. Try saying show products or add phone.");
      }
    };
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={startListening}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        🎙️ Start Voice Command
      </button>
      <p>{message}</p>
    </div>
  );
};

export default VoiceAssistant;
