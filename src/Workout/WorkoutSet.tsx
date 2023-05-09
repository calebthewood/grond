import { useState } from "react";
import { WorkoutCard } from "../Card/WorkoutCard";
import { IDeck, ICard } from "../MockData";
import './workout.css'


interface IWorkoutSetProps {
  topLevelNav: (to: string) => void;
  deck: IDeck;
}


export function WorkoutSet({ topLevelNav, deck }: IWorkoutSetProps) {

  const [cards, setCards] = useState<ICard[]>(deck.exercises);
  const [index, setIndex] = useState<number>(0);

  function returnHome() {
    topLevelNav('decks');
  }

  function next() {
    setIndex(index < cards.length - 1 ? index + 1 : index);
  }

  function prev() {
    setIndex(index > 0 ? index - 1 : 0);
  }

  return (
    <section>
      <button onClick={returnHome}>X</button>
      <div className="set-wrapper">
        <button
          disabled={index <= 0}
          onClick={prev}
          className="workout-nav">←</button>
        <WorkoutCard workout={cards[index]} />
        <button
          disabled={index >= cards.length - 1}
          onClick={next}
          className="workout-nav">→</button>
      </div>
    </section>
  );
}
