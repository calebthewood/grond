import { useState } from "react";
import { testDeck } from "../MockData";
import { DeckDetail } from


export function DeckList() {

  const [decks, setDecks] = useState([testDeck, testDeck, testDeck]);

  return (
    <>
      <h2>Your Workout Decks</h2>
      <ul>
        {decks.map(deck => <li><DeckDetail deck={deck} /></li>)}
      </ul>
    </>
  );
}
