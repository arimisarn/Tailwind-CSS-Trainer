import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, RotateCcw, Lightbulb } from 'lucide-react';

interface FailureMessageProps {
  onRetry: () => void;
  exerciseTitle: string;
  hint?: string;
  userName?: string;
}

export const FailureMessage: React.FC<FailureMessageProps> = ({ 
  onRetry, 
  exerciseTitle,
  hint,
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
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>
          
          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl mb-2"
          >
            😔
          </motion.div>
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Temps écoulé{userName ? `, ${userName}` : ''} !
        </h2>
        
        <p className="text-gray-600 mb-6">
          Désolé, vous n'avez pas terminé l'exercice "{exerciseTitle}" à temps.
        </p>

        {hint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-yellow-50 p-4 rounded-lg mb-6 text-left"
          >
            <div className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-800 mb-1">Indice:</p>
                <p className="text-yellow-700 text-sm">{hint}</p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetry}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Réessayer
        </motion.button>
        
        <p className="text-xs text-gray-500 mt-4">
          Prenez votre temps et réessayez !
        </p>
      </motion.div>
    </motion.div>
  );
};