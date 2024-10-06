import React, { useState } from 'react';
import Modal from './Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  // Function to generate dummy text
  const handleGenerate = () => {
    setGeneratedText(
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    );
  };

  // Function to insert text into LinkedIn input field
  const handleInsert = () => {
    const activeInput = document.activeElement as HTMLTextAreaElement | HTMLInputElement;
    if (activeInput && (activeInput.tagName === 'TEXTAREA' || activeInput.tagName === 'INPUT')) {
      activeInput.value = generatedText; // Insert the generated text
      setIsModalOpen(false); // Close modal after inserting
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGenerate={handleGenerate}
        onInsert={handleInsert}
        generatedText={generatedText}
      />
    </div>
  );
};

export default App;
