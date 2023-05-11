
import { useState } from "react";
import { ISideAForm } from "./CreateCard";


interface ISideAFormProps {
  updateNewCard: (p: ISideAForm) => void;
  toggleForm: ()=> void
}

export function SideAForm({ updateNewCard, toggleForm }: ISideAFormProps) {

  const [formA, setFormA] = useState<ISideAForm>({
    title: '',
    image: '',
  });

  /** Handle form data changing */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormA(f => ({
      ...f,
      [name]: value,
    }));
  }

  /** Handle form submit
   * - place in local storage for now?
   * - or add it to state at app level?
   */
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    console.debug('handleSubmit');
    const newCard = {
      ...formA,
      steps: [],
      rules: {
        qty: null,
        seconds: null
      }
    };
    updateNewCard(newCard);
    toggleForm()
  }


  return (
    <form action="" method="post">
      <h3>Side A: Details</h3>

      <label htmlFor="title">Title </label>
      <input type="text" name="title" id="title" onChange={handleChange} value={formA.title} />
      <br/>
      <label htmlFor="image">Image</label>
      <input type="text" name="image" id="image" onChange={handleChange} value={formA.image} />
      <br/>
      <button onClick={handleSubmit}>Next: Add Steps</button>
    </form>
  );
}