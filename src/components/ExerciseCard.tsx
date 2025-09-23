// src/components/ExerciseCard.tsx
import { type Exercise } from "../data/exercises";
import { useState } from "react";
import { Play, Send, CheckCircle, Clock } from "lucide-react";

interface Props {
  exercise: Exercise;
  onSubmit: (answer: string) => void;
  startTimer: () => void;
}

export default function ExerciseCard({
  exercise,
  onSubmit,
  startTimer,
}: Props) {
  const [started, setStarted] = useState(false);
  const [answer, setAnswer] = useState("");
  const [output, setOutput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    startTimer();
  };

  const handleSubmit = () => {
    onSubmit(answer);
    setOutput(answer);
    setIsSubmitted(true);

    // Reset submission state after 2 seconds for visual feedback
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header with exercise title */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">{exercise.title}</h2>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white rounded-b-2xl shadow-xl border border-gray-100">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Exercise */}
          <div className="flex-1 p-8 border-r border-gray-100">
            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
                Exercice
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {exercise.description}
              </p>
            </div>

            {!started ? (
              <div className="space-y-4">
                <button
                  className="group relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3"
                  onClick={handleStart}
                >
                  <Play className="w-5 h-5 group-hover:animate-pulse" />
                  Commencer l'exercice
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Le chronomètre démarrera automatiquement
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 text-lg placeholder-gray-400"
                    placeholder="Tapez votre réponse ici..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                  />
                  {answer && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>

                <button
                  className={`group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transform hover:scale-105 hover:shadow-lg"
                  }`}
                  onClick={handleSubmit}
                  disabled={!answer.trim() || isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Validé !
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Valider la réponse
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Right: Output */}
          <div className="flex-1 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-gray-700 text-lg">
                  Résultat
                </h3>
              </div>

              <div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-6 min-h-[200px] transition-all duration-300 hover:border-indigo-300">
                {output ? (
                  <div className="animate-fade-in">
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-indigo-900 mb-1">
                            Votre réponse :
                          </p>
                          <p className="text-indigo-700 text-lg">{output}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <div className="w-16 h-16 border-4 border-gray-200 border-dashed rounded-full mb-4 flex items-center justify-center">
                      <Send className="w-6 h-6" />
                    </div>
                    <p className="text-center">
                      {started
                        ? "Soumettez votre réponse pour voir le résultat..."
                        : "Le résultat s'affichera ici après validation"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
