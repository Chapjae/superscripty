import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [speaking, setSpeaking] = useState(false);

  const handleSpeak = () => {
    if (speaking) return;

    const speech = new SpeechSynthesisUtterance(text);
    speech.onstart = () => setSpeaking(true);
    speech.onend = () => setSpeaking(false);

    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter text to speak'
        rows='4'
        cols='50'
      />
      <button onClick={handleSpeak} disabled={speaking}>
        {speaking ? 'Speaking...' : 'Speak'}
      </button>
    </div>
  );
};

export default TextToSpeech;
