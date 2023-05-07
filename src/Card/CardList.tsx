import { useState } from "react";
import { WorkoutCard } from "./WorkoutCard";
import { cardList } from "../MockData";

interface ICardLostProps {
  topLevelNav: (to: string) => void;
}

/** Card List
 * - Will be rendered in the following places
 *    -- When viewing a deck
 *      -- needs option for sequence
 *      -- needs option to remove card from deck
 *      -- option to edit card?
 *    -- on a standalone route
 *       -- needs option to delete
 *       -- needs option to edit
 *
 */
export function CardList({ topLevelNav }: ICardLostProps) {
  // long term: cards will be fetched
  const [cards, setCards] = useState(cardList);

  return (
    <>
      <h2>Workout Cards</h2>
      {cards.map(card => <WorkoutCard workout={card} />)}
    </>
    );
}
