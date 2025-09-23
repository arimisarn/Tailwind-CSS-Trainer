import { useState } from "react";
import { exercises } from "../../data/exercises";
import Timer from "../Timer";
import ExerciseCard from "../ExerciseCard";
import MessageModal from "../MessageModal";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "info">(
    "info"
  );
  const [timerStart, setTimerStart] = useState(false);

  const handleTimeUp = () => {
    setMessageText("Oh oh 😅 Désolée, vous avez échoué !");
    setMessageType("error");
    setShowMessage(true);
  };

  const handleSubmit = (answer: string) => {
    if (answer.toLowerCase() === exercises[current].solution) {
      setMessageText("Bravo 🎉 Vous avez réussi !");
      setMessageType("success");
      setShowMessage(true);
    } else {
      setMessageText("Oh oh 😅 Désolée, vous avez échoué !");
      setMessageType("error");
      setShowMessage(true);
    }
  };

  // Fonction appelée quand le modal se ferme
  const handleModalClose = () => {
    setShowMessage(false);

    if (messageType === "success") {
      // Passe à l'exercice suivant
      setCurrent((prev) => prev + 1);
      setTimerStart(false);
    } else if (messageType === "error") {
      // Réessayer → reste sur le même exercice
      setTimerStart(false); // on peut remettre le timer à zéro si on veut
    }
  };

  const startTimer = () => setTimerStart(true);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {current < exercises.length ? (
        <>
          <div className="flex justify-end mb-4">
            <Timer
              duration={exercises[current].timer}
              start={timerStart}
              onTimeUp={handleTimeUp}
            />
          </div>
          <ExerciseCard
            exercise={exercises[current]}
            onSubmit={handleSubmit}
            startTimer={startTimer}
          />
          <MessageModal
            show={showMessage}
            message={messageText}
            type={messageType}
            onClose={handleModalClose} // ← ici on gère la logique
            autoClose={messageType === "success"} // auto-close seulement pour succès
            duration={3000}
          />
        </>
      ) : (
        <div className="text-center text-indigo-600 text-3xl font-bold mt-20">
          🎉 Félicitations ! Vous avez terminé tous les exercices.
        </div>
      )}
    </div>
  );
}
