import { useState } from "react";
import { ICard } from "../MockData";
import { SideAForm } from "./SideAForm";
import { SideBForm } from "./SideBForm";


interface ICreateCardProps {
  addCard: (c: ICard) => void;
}

export interface ISideAForm {
  title: string;
  image: string;
}

export interface ISideBForm {
  steps: string[]
}

/** CreateCard
 * Form component used to enter a new workout card for use in a deck
 */
export function CreateCard({ addCard }: ICreateCardProps) {

  const [showA, setShowA] = useState(true);
  const [newCard, setNewCard] = useState<ICard>({
    title: '',
    image: '',
    steps: [],
    rules: {
      qty: null,
      seconds: null
    }
  });

  function updateNewCard(formData: ISideAForm | ISideBForm) {
    setNewCard({
      ...newCard,
      ...formData
    });
  }

  return (
    <div>
      <h2>Create a new exercise</h2>
      {showA ?
        <SideAForm toggleForm={()=> setShowA(!showA)} updateNewCard={updateNewCard} />
        : <SideBForm updateNewCard={updateNewCard} />}

    </div>
  );
}
