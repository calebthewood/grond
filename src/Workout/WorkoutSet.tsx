import { useState } from "react";
import { WorkoutCard } from "../Card/WorkoutCard";
import { IDeck, ICard } from "../MockData";


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

  return (
    <section>
      <button onClick={returnHome}>X</button>
      <WorkoutCard workout={cards[index]} />
    </section>
  );
}
