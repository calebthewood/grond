import { useState } from "react";
import { ISideBForm } from "./CreateCard";

interface ISideBFormProps {
  updateNewCard: (p: ISideBForm) => void;
}

export function SideBForm({ updateNewCard }: ISideBFormProps) {

  const [form, setForm] = useState<string[]>(['']);

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    const { name, value } = evt.target;
    const idx = Number(name[name.length - 1]);
    const copy = form;
    copy[idx] = value;
    setForm([...copy])
  }

  function addStep() {
    setForm([...form, '']);
  }

  function removeStep() {
    setForm([...form.slice(0, -1)]);
  }

  /** Handle form submit
   * - place in local storage for now?
   * - or add it to state at app level?
   */
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    console.debug('handleSubmit');
    updateNewCard({steps: form});
  }


  return (
    <form action="" method="post">
      <h3>Side B: Steps</h3>

      {form.map((step, i) =>
        <div key={`steps-${i}`}>
          <label htmlFor={`step-${(i)}`}>{`Step ${(i + 1)}`} </label>
          <input
            type="text"
            name={`step-${i}`}
            id={`step-${i}`}
            onChange={handleChange}
            value={form[i]} />
        </div>
      )}

      <div>
        <button
          disabled={!form.length}
          onClick={removeStep}>- Step</button>
        <button
          disabled={form.length >= 10}
          onClick={addStep}>+ Step</button>
      </div>
      <button onClick={handleSubmit}>Done: Add Card!</button>
    </form>
  );
}