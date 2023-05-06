import { IDeck } from "../MockData";

interface DeckListProps {
  deck: IDeck;
}

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
