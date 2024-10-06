import React from 'react';
import AIIcon from './AIIcon';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGenerate: () => void;
    onInsert: () => void;
    generatedText: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onGenerate, onInsert, generatedText }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="bg-white p-5 rounded-lg shadow-xl w-full max-w-md">
                <div className="flex items-center mb-4">
                    <AIIcon />
                    <input
                        className="ml-3 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your prompt"
                        readOnly
                        value={generatedText}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2"
                        onClick={onInsert}
                        disabled={!generatedText}
                    >
                        Insert
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                        onClick={onGenerate}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
