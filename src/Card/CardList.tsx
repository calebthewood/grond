import { useState } from "react";
import { WorkoutCard } from "./WorkoutCard";
import { ICard, cardList } from "../MockData";
import { CreateNewBtn } from "./CreateCardBtn";
import { CreateCard } from "./CreateCard";

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
  const [showInfo, setShowInfo] = useState(false);
  const [showForm, setShowForm] = useState(false);


  function toggleShowInfo() {
    setShowInfo(!showInfo);
  }

  function addCard(newCard: ICard): void {
    setCards([...cards, newCard]);
    setShowInfo(!showInfo);
  }

  return (
    <div className="card-list">
      <h2>Current Workout Cards</h2>
      {showForm ?
        <CreateCard hideForm={() => setShowForm(false)} addCard={addCard}  /> :
        <CreateNewBtn innerText={'Add New Card'} toggleForm={() => setShowForm(!showForm)} />}
      <ul>
        {cards.map((card, i) => (
          <li className="" key={`card-${i}`}>
            <input type="checkbox" name="card-i" id="" />
            <WorkoutCard workout={card} showInfo={showInfo} toggleShowInfo={toggleShowInfo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
