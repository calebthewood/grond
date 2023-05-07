import { useState } from 'react';
import './App.css';
import { WorkoutSet } from './Workout/WorkoutSet';
import { DeckList } from './Deck/DeckList';
import { CardList } from './Card/CardList';

function App() {
  /* Views:
  Default - render DeckList
    - select Deck -> WorkoutSet
    - select CreateDeck -> CreateDeckForm

  WorkoutSet - renders WorkoutSet, on completion, returns to default
    - a carousel of cards, getting to end -> default
    - select X btn ->  returns to default
  */
  const [activeComponent, setActiveComponent] = useState('workout');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'workout':
        return <WorkoutSet topLevelNav={topLevelNav} />;
      case 'decks':
        return <DeckList topLevelNav={topLevelNav}  />;
      case 'cards':
        return <CardList topLevelNav={topLevelNav}  />;
      default:
        return null;
    }
  };

  function topLevelNav(to: string) {
    setActiveComponent(to)
  }

  return (
    <main>
      {renderComponent()}
    </main>
  );
}

export default App;
