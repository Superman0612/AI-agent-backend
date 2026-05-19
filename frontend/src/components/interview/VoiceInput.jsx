"use client";
import { useState, useRef } from "react";

export default function VoiceInput({ setAnswer }) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setAnswer(transcript);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current.stop();
    setListening(false);
  };

  return (
    <div className="mt-4">
      <button
        onClick={listening ? stopListening : startListening}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {listening ? "Stop Speaking" : "Start Speaking 🎤"}
      </button>
    </div>
  );
}