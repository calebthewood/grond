import { IDeck } from "../MockData";

interface DeckListProps {
  deck: IDeck;
}

/** DeckDetail
 * Rendered by DeckList, summarizes an exercise deck
 */
export function DeckDetail({ deck }: DeckListProps) {

  return (
    <div>
      <h3>{deck.title}</h3>
      <p>{deck.description}</p>
      <p>{deck.difficulty}</p>
      <p>{deck.lastCompleted}</p>
    </div>
  );
}
