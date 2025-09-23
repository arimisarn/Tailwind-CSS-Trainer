import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Trophy } from 'lucide-react';

interface SuccessMessageProps {
  onContinue: () => void;
  exerciseTitle: string;
  userName?: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ 
  onContinue, 
  exerciseTitle,
  userName
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="mb-6"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          
          <motion.div
            animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl mb-2"
          >
            🎉
          </motion.div>
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Bravo{userName ? ` ${userName}` : ''} !
        </h2>
        
        <p className="text-gray-600 mb-6">
          Vous avez réussi l'exercice "{exerciseTitle}" avec succès !
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-yellow-600 mb-6"
        >
          <Trophy className="w-5 h-5" />
          <span className="font-medium">Points gagnés: +10</span>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          Continuer
          <ArrowRight className="w-4 h-4" />
        </motion.button>
        
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            initial={{ 
              opacity: 0, 
              x: 0, 
              y: 0,
              scale: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              scale: [0, 1, 0]
            }}
            transition={{ 
              delay: 0.3 + i * 0.1, 
              duration: 1.5,
              ease: "easeOut"
            }}
            style={{
              left: '50%',
              top: '50%',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};