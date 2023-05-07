import { useState } from 'react';
import './App.css';
import { WorkoutSet } from './Workout/WorkoutSet';
import { DeckList } from './Deck/DeckList';
import { CardList } from './Card/CardList';
import { testDeck, IDeck } from './MockData';



/* Views:
Default - render DeckList
  - select Deck -> WorkoutSet
  - select CreateDeck -> CreateDeckForm

WorkoutSet - renders WorkoutSet, on completion, returns to default
  - a carousel of cards, getting to end -> default
  - select X btn ->  returns to default
*/

function App() {

  const [activeComponent, setActiveComponent] = useState('decks');
  const [decks, setDecks] = useState<IDeck[]>([testDeck, testDeck, testDeck]);
  const [activeDeck, setActiveDeck] = useState<IDeck>(decks[0]);

  function selectWorkoutDeck(deckIdx: number): void {
    setActiveDeck(decks[deckIdx]);
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'workout':
        return <WorkoutSet deck={activeDeck} topLevelNav={topLevelNav} />;
      case 'decks':
        return <DeckList selectDeck={selectWorkoutDeck} decks={decks} topLevelNav={topLevelNav} />;
      case 'cards':
        return <CardList topLevelNav={topLevelNav} />;
      default:
        return null;
    }
  };

  function topLevelNav(to: string) {
    setActiveComponent(to);
  }

  return (
    <main>
      {renderComponent()}
    </main>
  );
}

export default App;
