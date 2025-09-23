import React, { useState } from 'react';

interface WelcomeModalProps {
  onSubmit: (name: string) => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Bienvenue sur Tailwind Training !</h2>
        <p className="mb-6 text-gray-600">Pour commencer, entre ton prénom :</p>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Ton prénom"
          className="w-full border rounded-lg px-4 py-2 mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          autoFocus
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Commencer
        </button>
      </form>
    </div>
  );
};