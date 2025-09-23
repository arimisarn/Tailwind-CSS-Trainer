import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, BookOpen, Target } from "lucide-react";
import { exercises } from "./types/Exercices";
import { Timers } from "./components/Timers";
import { CodeEditor } from "./components/CodeEditor";
import { Preview } from "./components/Preview";
import { SuccessMessage } from "./components/SuccessMessage";
import { FailureMessage } from "./components/FailureMessage";
import { WelcomeModal } from "./components/WelcomeModal";

type GameState = "menu" | "exercise" | "success" | "failure";

function App() {
  // Ajout : récupération de l'index courant depuis localStorage
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(() => {
    const stored = localStorage.getItem("tailwind-current-exercise");
    return stored ? Number(stored) : 0;
  });
  const [gameState, setGameState] = useState<GameState>("menu");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [totalScore, setTotalScore] = useState(() => {
    const stored = localStorage.getItem("tailwind-total-score");
    return stored ? Number(stored) : 0;
  });
  const [isWaitingForSuccess, setIsWaitingForSuccess] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  const currentExercise = exercises[currentExerciseIndex];

  // Sauvegarde de l'index courant et du score à chaque changement
  useEffect(() => {
    localStorage.setItem(
      "tailwind-current-exercise",
      String(currentExerciseIndex)
    );
  }, [currentExerciseIndex]);
  useEffect(() => {
    localStorage.setItem("tailwind-total-score", String(totalScore));
  }, [totalScore]);

  useEffect(() => {
    const storedName = localStorage.getItem("tailwind-user-name");
    if (storedName) setUserName(storedName);
  }, []);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    localStorage.setItem("tailwind-user-name", name);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setGameState("failure");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  useEffect(() => {
    if (gameState === "exercise" && userCode.trim() && !isWaitingForSuccess) {
      const userClasses = userCode
        .trim()
        .split(" ")
        .filter((c) => c)
        .sort();
      const solutionClasses = currentExercise.solution
        .split(" ")
        .filter((c) => c)
        .sort();
      if (
        userClasses.length === solutionClasses.length &&
        userClasses.every((cls) => solutionClasses.includes(cls))
      ) {
        setIsTimerRunning(false);
        setTotalScore((prev) => prev + 10);
        setIsWaitingForSuccess(true);
        setTimeout(() => {
          setIsWaitingForSuccess(false);
          setGameState("success");
        }, 5000);
      }
    }
  }, [userCode, currentExercise.solution, gameState, isWaitingForSuccess]);

  const startExercise = () => {
    setGameState("exercise");
    setTimeLeft(currentExercise.timer);
    setIsTimerRunning(true);
    setUserCode("");
    setIsWaitingForSuccess(false);
  };

  const nextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex((prev) => prev + 1);
      setGameState("menu");
    } else {
      alert(
        `Félicitations! Vous avez terminé tous les exercices avec un score de ${totalScore} points!`
      );
      setCurrentExerciseIndex(0);
      setTotalScore(0);
      setGameState("menu");
    }
  };

  const retryExercise = () => {
    setGameState("menu");
    setUserCode("");
    setIsWaitingForSuccess(false);
  };

  const renderMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4"
    >
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tailwind CSS Trainer
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Maîtrisez Tailwind CSS avec des exercices pratiques et chronométrés
          </p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">
                {currentExerciseIndex + 1}
              </div>
              <div className="text-sm text-gray-600">Exercice</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">
                {exercises.length}
              </div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">
                {totalScore}
              </div>
              <div className="text-sm text-gray-600">Points</div>
            </div>
          </div>
          {userName && (
            <div className="text-lg font-semibold text-blue-700 mt-2">
              Bienvenue, {userName} !
            </div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-6"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {currentExercise.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {currentExercise.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Durée: {currentExercise.timer}s</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Points: +10</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={startExercise}
            className="w-full bg-blue-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-3"
          >
            <Play className="w-5 h-5" />
            Commencer l'exercice
          </motion.button>
        </motion.div>
        <div className="text-center text-sm text-gray-500">
          Exercice {currentExerciseIndex + 1} sur {exercises.length}
        </div>
      </div>
    </motion.div>
  );

  const renderExercise = () => (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              {currentExercise.title}
            </h1>
            <p className="text-gray-600 mt-1">{currentExercise.description}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-sm text-gray-600">Score</div>
              <div className="text-xl font-bold text-blue-500">
                {totalScore}
              </div>
            </div>
            {userName && (
              <div className="text-sm text-gray-700 font-semibold bg-blue-100 px-3 py-1 rounded-lg">
                👋 {userName}
              </div>
            )}
            {isWaitingForSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full"
                />
                <span className="font-medium">
                  Bonne réponse ! Préparation du message...
                </span>
              </motion.div>
            )}
            <Timers
              timeLeft={timeLeft}
              totalTime={currentExercise.timer}
              isRunning={isTimerRunning && !isWaitingForSuccess}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="border-r bg-white">
          <CodeEditor
            value={userCode}
            onChange={setUserCode}
            exercise={currentExercise}
          />
        </div>
        <div className="bg-gray-50">
          <Preview classes={userCode} exercise={currentExercise} />
        </div>
      </div>
    </div>
  );

  // ...existing code...
  return (
    <div className="min-h-screen flex flex-col">
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col justify-start p-0 overflow-auto">
        {/* Enlève la min-h-screen du renderMenu pour éviter l'espace en haut */}
        {!userName && <WelcomeModal onSubmit={handleNameSubmit} />}
        <AnimatePresence mode="wait">
          {gameState === "menu" && (
            <motion.div
              key="menu"
              className="flex-1 flex items-start justify-center p-0"
            >
              {renderMenu()}
            </motion.div>
          )}
          {gameState === "exercise" && (
            <motion.div
              key="exercise"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {renderExercise()}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {gameState === "success" && (
            <SuccessMessage
              onContinue={nextExercise}
              exerciseTitle={currentExercise.title}
              userName={userName || undefined}
            />
          )}
          {gameState === "failure" && (
            <FailureMessage
              onRetry={retryExercise}
              exerciseTitle={currentExercise.title}
              hint="Essayez de bien lire la description et utilisez les classes Tailwind appropriées."
              userName={userName || undefined}
            />
          )}
        </AnimatePresence>
      </div>
      {/* Footer fixé en bas */}
      <footer className="w-full text-center py-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 text-white font-semibold shadow-lg tracking-wide text-base fixed bottom-0 left-0 z-50">
        <span className="inline-flex items-center gap-2 justify-center">
          <svg
            className="w-5 h-5 text-yellow-300 animate-bounce"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 2a1 1 0 01.894.553l2.382 4.824 5.326.773a1 1 0 01.554 1.707l-3.853 3.756.91 5.308a1 1 0 01-1.451 1.054L10 16.347l-4.762 2.498a1 1 0 01-1.451-1.054l.91-5.308-3.853-3.756a1 1 0 01.554-1.707l5.326-.773L9.106 2.553A1 1 0 0110 2z" />
          </svg>
          Développé par{" "}
          <span className="font-bold underline underline-offset-2">
            Arimisa Nathalie
          </span>
        </span>
      </footer>
    </div>
  );
  // ...existing code...
}

export default App;
