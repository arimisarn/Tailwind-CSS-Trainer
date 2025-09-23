import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
  isRunning: boolean;
}

export const Timers: React.FC<TimerProps> = ({ timeLeft, totalTime, isRunning }) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isWarning = timeLeft <= 10 && timeLeft > 0;
  const isExpired = timeLeft <= 0;
  
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getTimerColor = () => {
    if (isExpired) return 'text-red-500';
    if (isWarning) return 'text-orange-500';
    return 'text-blue-500';
  };

  const getStrokeColor = () => {
    if (isExpired) return '#ef4444';
    if (isWarning) return '#f97316';
    return '#3b82f6';
  };

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={getStrokeColor()}
            strokeWidth="6"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className={`text-lg font-bold ${getTimerColor()}`}
            animate={{ 
              scale: isWarning ? [1, 1.1, 1] : 1,
              color: isWarning ? ['#f97316', '#dc2626', '#f97316'] : undefined
            }}
            transition={{ 
              duration: isWarning ? 0.5 : 0,
              repeat: isWarning ? Infinity : 0
            }}
          >
            {timeLeft}s
          </motion.div>
        </div>
      </div>

      {isWarning && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-orange-600"
        >
          <AlertTriangle className="w-5 h-5" />
          <span className="font-medium">Attention! Il te reste {timeLeft} secondes</span>
        </motion.div>
      )}

      {!isRunning && !isExpired && (
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span>Prêt à commencer</span>
        </div>
      )}
    </div>
  );
};