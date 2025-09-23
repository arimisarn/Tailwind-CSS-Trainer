import React from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, RotateCcw } from 'lucide-react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  exercise: any;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ 
  value, 
  onChange, 
  placeholder = "Tapez vos classes Tailwind ici...",
  exercise
}) => {
  const handleReset = () => {
    onChange('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getInitialHTML = () => {
    const exerciseId = exercise?.id;
    
    switch (exerciseId) {
      case 1:
        return `<button class="">Mon Bouton</button>`;
      case 2:
        return `<div class="">
  <div class="bg-white p-4 rounded shadow">Carte 1</div>
  <div class="bg-white p-4 rounded shadow">Carte 2</div>
  <div class="bg-white p-4 rounded shadow">Carte 3</div>
</div>`;
      case 3:
        return `<div class="">
  <div class="bg-white p-4 rounded">Item 1</div>
  <div class="bg-white p-4 rounded">Item 2</div>
  <div class="bg-white p-4 rounded">Item 3</div>
</div>`;
      case 4:
        return `<nav class="">
  <a href="#" class="">Accueil</a>
  <a href="#" class="">À propos</a>
  <a href="#" class="">Contact</a>
</nav>`;
      case 5:
        return `<form class="">
  <input type="text" placeholder="Nom" />
  <input type="email" placeholder="Email" />
  <button type="submit" class="">Envoyer</button>
</form>`;
      case 6:
        return `<div class="">
  <div class="bg-white p-4 rounded shadow">Feature 1</div>
  <div class="bg-white p-4 rounded shadow">Feature 2</div>
  <div class="bg-white p-4 rounded shadow">Feature 3</div>
</div>`;
      case 7:
        return `<section class="">
  <h1 class="text-2xl font-bold">Hero Title</h1>
  <p>Hero description text</p>
  <button class="px-4 py-2 rounded">CTA Button</button>
</section>`;
      case 8:
        return `<div class="">
  <div class="bg-white p-4 rounded shadow">Card 1</div>
  <div class="bg-white p-4 rounded shadow">Card 2</div>
  <div class="bg-white p-4 rounded shadow">Card 3</div>
</div>`;
      case 9:
        return `<div class="">
  <div class="bg-white p-4 rounded shadow">"Amazing service!" - John</div>
  <div class="bg-white p-4 rounded shadow">"Highly recommend!" - Jane</div>
</div>`;
      case 10:
        return `<div class="">
  <aside class="bg-gray-200 p-4">Sidebar</aside>
  <main class="bg-white p-4">Main Content</main>
</div>`;
      case 11:
        return `<footer class="">
  <a href="#" class="hover:underline">Accueil</a>
  <a href="#" class="hover:underline">Contact</a>
  <a href="#" class="hover:underline">Mentions</a>
</footer>`;
      case 12:
        return `<div class="">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>`;
      case 13:
        return `<div class="">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`;
      case 14:
        return `<div class="">
  <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop" alt="Card image" class="w-full h-32 object-cover rounded" />
  <div class="p-4">
    <h3 class="font-bold">Card Title</h3>
    <p class="text-gray-600">Card description</p>
  </div>
</div>`;
      case 15:
        return `<div class="">
  <div class="text-center">
    <div class="text-3xl font-bold">1000+</div>
    <div class="text-gray-600">Users</div>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold">50+</div>
    <div class="text-gray-600">Projects</div>
  </div>
  <div class="text-center">
    <div class="text-3xl font-bold">99%</div>
    <div class="text-gray-600">Success</div>
  </div>
</div>`;
      case 16:
        return `<div class="">
  <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" alt="Overlay image" class="w-full h-48 object-cover" />
  <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
    <p class="text-white font-bold">Overlay Text</p>
  </div>
</div>`;
      case 17:
        return `<div class="">
  <div class="bg-white p-4 rounded shadow">Item 1</div>
  <div class="bg-white p-4 rounded shadow">Item 2</div>
  <div class="bg-white p-4 rounded shadow">Item 3</div>
  <div class="bg-white p-4 rounded shadow">Item 4</div>
</div>`;
      case 18:
        return `<div class="">
  <a href="#" class="block p-2 hover:bg-gray-200">Dashboard</a>
  <a href="#" class="block p-2 hover:bg-gray-200">Users</a>
  <a href="#" class="block p-2 hover:bg-gray-200">Settings</a>
</div>`;
      case 19:
        return `<div class="">
  <div class="border-b">
    <button class="w-full text-left p-4 font-medium">Question 1?</button>
    <div class="p-4 text-gray-600">Answer 1</div>
  </div>
  <div class="border-b">
    <button class="w-full text-left p-4 font-medium">Question 2?</button>
    <div class="p-4 text-gray-600">Answer 2</div>
  </div>
</div>`;
      case 20:
        return `<table class="">
  <thead>
    <tr class="bg-gray-100">
      <th class="p-2 text-left">Nom</th>
      <th class="p-2 text-left">Email</th>
      <th class="p-2 text-left">Statut</th>
    </tr>
  </thead>
  <tbody>
    <tr class="">
      <td class="p-2">John Doe</td>
      <td class="p-2">john@example.com</td>
      <td class="p-2">Actif</td>
    </tr>
    <tr class="">
      <td class="p-2">Jane Smith</td>
      <td class="p-2">jane@example.com</td>
      <td class="p-2">Inactif</td>
    </tr>
  </tbody>
</table>`;
      default:
        return `<div class="">Contenu à styliser</div>`;
    }
  };

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="h-full"
    >
      <div className="bg-gray-900 rounded-lg h-full flex flex-col">
        <div className="flex items-center justify-between p-3 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300 font-medium">Éditeur de code</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded transition-colors"
              title="Copier le code"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded transition-colors"
              title="Réinitialiser"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-4 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Code HTML initial:
            </label>
            <div className="bg-gray-800 p-3 rounded-lg font-mono text-sm text-gray-300 whitespace-pre-wrap border border-gray-700 max-h-40 overflow-y-auto">
              {getInitialHTML()}
            </div>
          </div>
          
          <div className="flex-1 flex flex-col">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Classes Tailwind à ajouter:
            </label>
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent text-white font-mono text-sm resize-none outline-none placeholder-gray-500 p-3 border border-gray-700 rounded-lg focus:border-blue-500 transition-colors"
              spellCheck={false}
            />
          </div>
          
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-800/30">
            <p className="text-sm text-blue-300">
              💡 <strong>Astuce:</strong> Tapez les classes Tailwind séparées par des espaces. 
              L'aperçu se met à jour automatiquement!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};