/* Mock Data for Development. To be Replaced by Node-Express BE. */

interface ICard {
  title: string;
  description: string;
  image: string;
  rules?: {
    qty: number | null;
    seconds: number | null;
  };
}

export const cardList: ICard[] = [
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

interface IDeck {
  title: string;
  description: string;
  exercises: ICard[];
}

export const testDeck: IDeck = {
  title: 'Test Deck 1',
  description: 'This workout deck contains pushups, pullups, and squats.',
  exercises: cardList
};
