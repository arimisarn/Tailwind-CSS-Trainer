// src/components/Timer.tsx
import { useEffect, useState } from "react";
import { Clock, AlertCircle } from "lucide-react";

interface TimerProps {
  duration: number;
  start: boolean;
  onTimeUp: () => void;
}

export default function Timer({ duration, start, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isWarning, setIsWarning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setTimeLeft(duration);
    setIsWarning(false);
    setIsComplete(false);
  }, [duration, start]);

  useEffect(() => {
    if (!start) return;
    
    if (timeLeft <= 0) {
      setIsComplete(true);
      onTimeUp();
      return;
    }

    // Warning state when less than 30 seconds or 25% of time remaining
    const warningThreshold = Math.min(30, duration * 0.25);
    setIsWarning(timeLeft <= warningThreshold);

    const interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, start, onTimeUp, duration]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const percentage = ((duration - timeLeft) / duration) * 100;

  // Color schemes based on state
  const getColorScheme = () => {
    if (isComplete) {
      return {
        bg: 'bg-red-500',
        text: 'text-red-600',
        border: 'border-red-500',
        gradient: 'from-red-500 to-red-600'
      };
    }
    if (isWarning) {
      return {
        bg: 'bg-orange-500',
        text: 'text-orange-600',
        border: 'border-orange-500',
        gradient: 'from-orange-500 to-red-500'
      };
    }
    return {
      bg: 'bg-indigo-500',
      text: 'text-indigo-600',
      border: 'border-indigo-500',
      gradient: 'from-indigo-500 to-purple-600'
    };
  };

  const colors = getColorScheme();

  if (!start) {
    return (
      <div className="flex items-center gap-3 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl px-4 py-3">
        <Clock className="w-5 h-5 text-gray-400" />
        <span className="text-gray-500 font-medium">Prêt à commencer</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Main timer container */}
      <div className={`relative overflow-hidden bg-white border-2 ${colors.border} rounded-2xl p-6 transition-all duration-300 ${
        isWarning ? 'animate-pulse' : ''
      } ${isComplete ? 'shake' : ''}`}>
        
        {/* Background progress bar */}
        <div className="absolute inset-0 bg-gray-50">
          <div 
            className={`h-full bg-gradient-to-r ${colors.gradient} opacity-10 transition-all duration-1000 ease-out`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isComplete ? (
              <AlertCircle className={`w-6 h-6 ${colors.text} animate-bounce`} />
            ) : isWarning ? (
              <Clock className={`w-6 h-6 ${colors.text} animate-spin`} />
            ) : (
              <Clock className={`w-6 h-6 ${colors.text}`} />
            )}
            
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                Temps restant
              </span>
              <div className={`text-2xl font-bold font-mono ${colors.text} tabular-nums`}>
                {minutes}:{seconds.toString().padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Circular progress indicator */}
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
              {/* Background circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-gray-200"
              />
              {/* Progress circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className={colors.text}
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - percentage / 100)}`}
                strokeLinecap="round"
                style={{
                  transition: 'stroke-dashoffset 1s ease-out'
                }}
              />
            </svg>
            <div className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${colors.text}`}>
              {Math.round(percentage)}%
            </div>
          </div>
        </div>
      </div>

      {/* Status messages */}
      {isComplete && (
        <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-sm text-red-700 font-medium">Temps écoulé !</span>
        </div>
      )}
      
      {isWarning && !isComplete && (
        <div className="mt-3 bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center gap-2">
          <Clock className="w-4 h-4 text-orange-500 flex-shrink-0" />
          <span className="text-sm text-orange-700 font-medium">
            Dépêchez-vous ! Plus que {timeLeft} seconde{timeLeft !== 1 ? 's' : ''}.
          </span>
        </div>
      )}

      {/* Custom styles for shake animation */}
      {/* <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style> */}
    </div>
  );
}