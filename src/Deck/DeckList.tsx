import { IDeck } from "../MockData";
import { DeckDetail } from "./DeckDetail";


interface IDeckListProps {
  topLevelNav: (to: string) => void;
  selectDeck: (i: number) => void;
  decks: IDeck[];
}


export function DeckList({ decks, topLevelNav, selectDeck }: IDeckListProps) {

  function handleClick(i: number) {
    selectDeck(i);
    topLevelNav('workout');
  }

  return (
    <>
      <h2>Your Workout Decks</h2>
      <ul className="deck-list">
        {decks.map((deck, i) =>
          <li
            className="deck-item"
            onClick={() => handleClick(i)}><DeckDetail deck={deck} /></li>)
        }
        <li><button onClick={() => topLevelNav('createdeck')}>Create New Deck +</button></li>
      </ul>
    </>
  );
}
