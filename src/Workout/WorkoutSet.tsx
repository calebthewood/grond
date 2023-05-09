import { useState } from "react";
import { WorkoutCard } from "../Card/WorkoutCard";
import { IDeck, ICard } from "../MockData";
import './workout.css';


interface IWorkoutSetProps {
  topLevelNav: (to: string) => void;
  deck: IDeck;
}


export function WorkoutSet({ topLevelNav, deck }: IWorkoutSetProps) {

  const [cards, setCards] = useState<ICard[]>(deck.exercises);
  const [index, setIndex] = useState<number>(0);
  const [showInfo, setShowInfo] = useState(false);

  function returnHome() {
    topLevelNav('decks');
  }

  function next() {
    if (index >= cards.length - 1) {
      topLevelNav('decks');
      // add a "finished!" screen b/f returning to decks
      return;
    }
    setIndex(index < cards.length - 1 ? index + 1 : index);
    setShowInfo(false);
  }

  function prev() {
    setIndex(index > 0 ? index - 1 : 0);
    setShowInfo(false);
  }

  function toggleShowInfo() {
    setShowInfo(!showInfo);
  }

  return (
    <section>
      <div className="return-btn">
        <button onClick={returnHome}>End Workout</button>
      </div>
      <div className="set-wrapper">
        <button
          disabled={index <= 0}
          onClick={prev}
          className="workout-nav">←</button>
        <WorkoutCard workout={cards[index]} showInfo={showInfo} toggleShowInfo={toggleShowInfo} />
        <button
          onClick={next}
          className="workout-nav">→</button>
      </div>
    </section>
  );
}
