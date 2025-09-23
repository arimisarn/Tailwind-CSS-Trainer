import React from 'react';
import { Eye } from 'lucide-react';

interface PreviewProps {
  classes: string;
  exercise: any;
}

export const Preview: React.FC<PreviewProps> = ({ classes, exercise }) => {
  const getPreviewContent = () => {
    const exerciseId = exercise?.id;
    
    switch (exerciseId) {
      case 1:
        return <button className={classes}>Mon Bouton</button>;
      
      case 2:
        return (
          <div className={classes}>
            <div className="bg-white p-4 rounded shadow">Carte 1</div>
            <div className="bg-white p-4 rounded shadow">Carte 2</div>
            <div className="bg-white p-4 rounded shadow">Carte 3</div>
          </div>
        );
      
      case 3:
        return (
          <div className={classes}>
            <div className="bg-white p-4 rounded">Item 1</div>
            <div className="bg-white p-4 rounded">Item 2</div>
            <div className="bg-white p-4 rounded">Item 3</div>
          </div>
        );
      
      case 4:
        return (
          <nav className={classes}>
            <a href="#" className="p-2">Accueil</a>
            <a href="#" className="p-2">À propos</a>
            <a href="#" className="p-2">Contact</a>
          </nav>
        );
      
      case 5:
        return (
          <form className={classes}>
            <input type="text" placeholder="Nom" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
            <button type="submit" className={classes}>Envoyer</button>
          </form>
        );
      
      case 6:
        return (
          <div className={classes}>
            <div className="bg-white p-4 rounded shadow">Feature 1</div>
            <div className="bg-white p-4 rounded shadow">Feature 2</div>
            <div className="bg-white p-4 rounded shadow">Feature 3</div>
          </div>
        );
      
      case 7:
        return (
          <section className={classes}>
            <h1 className="text-2xl font-bold">Hero Title</h1>
            <p>Hero description text</p>
            <button className="px-4 py-2 rounded">CTA Button</button>
          </section>
        );
      
      case 8:
        return (
          <div className={classes}>
            <div className="bg-white p-4 rounded shadow">Card 1</div>
            <div className="bg-white p-4 rounded shadow">Card 2</div>
            <div className="bg-white p-4 rounded shadow">Card 3</div>
          </div>
        );
      
      case 9:
        return (
          <div className={classes}>
            <div className="bg-white p-4 rounded shadow">"Amazing service!" - John</div>
            <div className="bg-white p-4 rounded shadow">"Highly recommend!" - Jane</div>
          </div>
        );
      
      case 10:
        return (
          <div className={classes}>
            <aside className="bg-gray-200 p-4">Sidebar</aside>
            <main className="bg-white p-4">Main Content</main>
          </div>
        );
      
      case 11:
        return (
          <footer className={classes}>
            <a href="#" className="hover:underline">Accueil</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Mentions</a>
          </footer>
        );
      
      case 12:
        return (
          <div className={classes}>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        );
      
      case 13:
        return (
          <div className={classes}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </div>
        );
      
      case 14:
        return (
          <div className={classes}>
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop" alt="Card image" className="w-full h-32 object-cover rounded" />
            <div className="p-4">
              <h3 className="font-bold">Card Title</h3>
              <p className="text-gray-600">Card description</p>
            </div>
          </div>
        );
      
      case 15:
        return (
          <div className={classes}>
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-gray-600">Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-gray-600">Success</div>
            </div>
          </div>
        );
      
      default:
        return <div className={classes}>Contenu à styliser</div>;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 p-3 bg-gray-50 border-b">
        <Eye className="w-4 h-4 text-blue-500" />
        <span className="font-medium text-gray-700">Aperçu</span>
      </div>
      
      <div className="flex-1 p-4 bg-white overflow-auto">
        <div className="min-h-full flex items-center justify-center bg-gray-50 rounded-lg p-8">
          {getPreviewContent()}
        </div>
      </div>
      
      <div className="p-3 bg-gray-50 border-t">
        <div className="text-xs text-gray-600 font-mono bg-white p-2 rounded">
          Classes: {classes || 'Aucune classe appliquée'}
        </div>
      </div>
    </div>
  );
};