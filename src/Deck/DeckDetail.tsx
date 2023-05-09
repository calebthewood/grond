import { IDeck } from "../MockData";
import './deckStyles.css';

interface DeckListProps {
  deck: IDeck;
}

/** DeckDetail
 * Rendered by DeckList, summarizes an exercise deck
 */
export function DeckDetail({ deck }: DeckListProps) {

  return (
    <div className="deck-detail">
      <div className="deck-detail-header">
        <h2>{deck.title}</h2>
        <div>
          <p><i>difficulty:</i> {deck.difficulty}</p>
          <p><i>last completed:</i> {deck.lastCompleted}</p>
        </div>
      </div>
      <p className="deck-detail-description">{deck.description}</p>
    </div>
  );
}
