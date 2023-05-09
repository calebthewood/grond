/* Mock Data for Development. To be Replaced by Node-Express BE. */

export interface ICard {
  title: string;
  steps: string[];
  image: string;
  rules: {
    qty: number | null;
    seconds: number | null;
  };
}

export const cardList: ICard[] = [
  {
    title: 'Push-ups',
    steps: ['Assume a plank position', 'Elbows close to your torso', 'Dip until your chest nearly touches the ground', 'Push until your arms are fully extended', 'Keep your body rigid and repeat'],
    image: 'pushup.png',
    rules: {
      qty: 20,
      seconds: null
    }
  },
  {
    title: 'Overhand Pull-ups',
    steps: ['Grip bar with palms out', 'Hang with arms fully extended', 'Pull up until chin is above bar', 'Return to hanging position', 'Repeat'],
    image: 'pullup.png',
    rules: {
      qty: 10,
      seconds: null
    }
  },
  {
    title: 'Squats',
    steps: ['Place feet shoulders width apart', 'Hands on your head, knees slightly bent', 'Dip until your bum is near the ground', 'return to standing and repeat'],
    image: 'squat.png',
    rules: {
      qty: 30,
      seconds: null
    }
  },
];

export interface IDeck {
  title: string;
  description: string;
  difficulty: number;
  lastCompleted: string | null;
  exercises: ICard[];
}

export const testDeck: IDeck = {
  title: 'Test Deck 1',
  description: 'This workout deck contains pushups, pullups, and squats.',
  difficulty: 3,
  lastCompleted: '--/--/--',
  exercises: cardList,
};
