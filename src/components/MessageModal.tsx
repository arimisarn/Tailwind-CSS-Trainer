// src/components/MessageModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Info, X, Sparkles } from "lucide-react";
import { useEffect } from "react";

interface Props {
  show: boolean;
  message: string;
  onClose: () => void;
  type?: 'success' | 'error' | 'warning' | 'info';
  autoClose?: boolean;
  duration?: number;
}

export default function MessageModal({ 
  show, 
  message, 
  onClose, 
  type = 'info',
  autoClose = false,
  duration = 3000 
}: Props) {

  useEffect(() => {
    if (show && autoClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, autoClose, duration, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && show) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [show, onClose]);

  const getTypeConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: CheckCircle,
          iconColor: 'text-green-500',
          bgGradient: 'from-green-50 to-emerald-50',
          borderColor: 'border-green-200',
          buttonColor: 'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700',
          accentColor: 'text-green-700'
        };
      case 'error':
        return {
          icon: AlertCircle,
          iconColor: 'text-red-500',
          bgGradient: 'from-red-50 to-pink-50',
          borderColor: 'border-red-200',
          buttonColor: 'from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700',
          accentColor: 'text-red-700'
        };
      case 'warning':
        return {
          icon: AlertCircle,
          iconColor: 'text-orange-500',
          bgGradient: 'from-orange-50 to-yellow-50',
          borderColor: 'border-orange-200',
          buttonColor: 'from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700',
          accentColor: 'text-orange-700'
        };
      default:
        return {
          icon: Info,
          iconColor: 'text-indigo-500',
          bgGradient: 'from-indigo-50 to-blue-50',
          borderColor: 'border-indigo-200',
          buttonColor: 'from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700',
          accentColor: 'text-indigo-700'
        };
    }
  };

  const config = getTypeConfig();
  const IconComponent = config.icon;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };



  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 px-4"
          onClick={onClose}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`relative bg-gradient-to-br ${config.bgGradient} border-2 ${config.borderColor} p-8 rounded-3xl shadow-2xl max-w-md w-full text-center backdrop-blur-lg`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors duration-200 group"
              aria-label="Fermer"
            >
              <X className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>

            {/* Decorative sparkles for success */}
            {type === 'success' && (
              <>
                <motion.div
                  animate="animate"
                  className="absolute top-6 left-6"
                >
                  <Sparkles className="w-4 h-4 text-green-400" />
                </motion.div>
                <motion.div
                  animate="animate"
                  className="absolute bottom-6 right-8"
                  style={{ animationDelay: '1s' }}
                >
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                </motion.div>
              </>
            )}

            {/* Icon */}
            <motion.div
              initial="hidden"
              animate="visible"
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/80 shadow-lg mb-6 ${config.iconColor}`}
            >
              <IconComponent className="w-8 h-8" />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3, duration: 0.4 }
              }}
              className="mb-8"
            >
              <p className={`text-xl font-semibold mb-2 ${config.accentColor}`}>
                {message}
              </p>
              {autoClose && (
                <p className="text-sm text-gray-600">
                  Se ferme automatiquement dans {Math.ceil(duration / 1000)} secondes
                </p>
              )}
            </motion.div>

            {/* Action button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: 0.4, duration: 0.3 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${config.buttonColor} text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30`}
              onClick={onClose}
            >
              {type === 'success' ? 'Continuer' : type === 'error' ? 'Réessayer' : 'Continuer'}
            </motion.button>

            {/* Progress bar for auto-close */}
            {autoClose && (
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: duration / 1000, ease: "linear" }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${config.buttonColor} rounded-b-3xl origin-left`}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}