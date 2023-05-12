import { useState } from "react";
import { ISideBForm } from "./CreateCard";
import { ICard } from "../MockData";

interface ISideBFormProps {
  updateNewCard: (p: ISideBForm) => void;
  toggleForm: () => void;
}

interface IStepForm {
  step: string;
}

export function SideBForm({ updateNewCard, toggleForm }: ISideBFormProps) {

  const [formB, setFormB] = useState<IStepForm[]>([{ step: '' }]);

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    const { name, value } = evt.target;
    const idx = Number(name.split('-')[1]);
    console.log("idx: ", idx);
    const copy = formB;
    copy[idx].step = value;
    setFormB([...copy]);
  }

  function addStep(evt: React.FormEvent) {
    evt.preventDefault();
    setFormB([...formB, { step: '' }]);
  }

  function removeStep(evt: React.FormEvent) {
    evt.preventDefault();
    setFormB([...formB.slice(0, -1)]);
  }

  /** Handle form submit
   * - place in local storage for now?
   * - or add it to state at app level?
   */
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    console.debug('handleSubmit');
    const steps = formB.map(item => item.step);
    updateNewCard({ steps });
  }


  return (
    <form action="" method="post">
      <h3>Side B: Steps</h3>

      {formB.map((step, i) =>
        <div key={`steps-${i}`}>
          <label htmlFor={`step-${(i)}`}>{`Step ${(i + 1)}`} </label>
          <input
            type="text"
            name={`step-${i}`}
            id={`step-${i}`}
            onChange={handleChange}
            value={formB[i].step} />
        </div>
      )}

      <div>
        <button
          disabled={!formB.length}
          onClick={removeStep}>- Step</button>
        <button
          disabled={formB.length >= 10}
          onClick={addStep}>+ Step</button>
      </div>

      <div>
        <button onClick={toggleForm}>Back</button>
        <button onClick={handleSubmit}>Add New Card</button>
      </div>
    </form>
  );
}