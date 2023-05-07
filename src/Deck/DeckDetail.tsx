import { IDeck } from "../MockData";
import './deckStyles.css'

interface DeckListProps {
  deck: IDeck;
}

/** DeckDetail
 * Rendered by DeckList, summarizes an exercise deck
 */
export function DeckDetail({ deck }: DeckListProps) {

  return (
    <div className="deck-detail">
      <h3>{deck.title}</h3>
      <p>{deck.description}</p>
      <p>{deck.difficulty}</p>
      <p>{deck.lastCompleted}</p>
    </div>
  );
}
