import { useState } from "react";
import { testDeck } from "../MockData";
import { DeckDetail } from "./DeckDetail";

interface IDeckListProps {
  topLevelNav: (to: string) => void;
}


export function DeckList({ topLevelNav }: IDeckListProps) {

  const [decks, setDecks] = useState([testDeck, testDeck, testDeck]);

  return (
    <>
      <h2>Your Workout Decks</h2>
      <ul>
        {decks.map(deck => <li><DeckDetail deck={deck} /></li>)}
        <li><button>Create New Deck +</button></li>
      </ul>
    </>
  );
}
