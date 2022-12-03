import React, { useState, useEffect } from "react";
import "./Styles.css";

export default function TextoAnimado() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Você é Incrível"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);
  return (
    <>
      <div className="TextoAnimado">
        <h2>{text}</h2>
      </div>
    </>
  );
}
