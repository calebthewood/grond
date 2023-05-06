import { useState } from "react";
import { WorkoutCard } from "./WorkoutCard";

interface ICard {
  title: string;
  description: string;
  image: string;
}

const mockCards = [
  {
    title: 'Push-ups',
    description: 'Keeping your elbows close, and torso rigid, dip until your chest nearly touches the ground',
    image: '../assets/pushup.png',
  },
  {
    title: 'Overhand Pull-ups',
    description: 'Grab the bar palms facing away, sink until your arms are fully extended, then pull yourself up until your chin is above the bar.',
    image: '../assets/pullup.png',
  },
  {
    title: 'Squats',
    description: 'Plant feet shoulder\'s width apart. Dip down, getting your bum as close to the ground as your legs allow. Ass to grass!',
    image: '../assets/squat.png',
  },
];

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
export function CardList() {
  // long term: cards will be fetched
  const [cards, setCards] = useState<ICard[]>(mockCards);

  return (<>
    <h2>Workout Cards</h2>
    {cards.map(card => <WorkoutCard workout={card} />)}
  </>);
}