import { useState } from "react";
import { ICard } from "../MockData";

interface ICreateCardProps {
  addCard: (c: ICard) => void;
  hideForm: () => void;
}

export interface ISideAForm {
  title: string;
  image: string;
}

export interface ISideBForm {
  steps: string[];
}

interface timePair {
  value: string;
  text: string;
}

/** CreateCard
 * Form component used to enter a new workout card for use in a deck
 */
export function CreateCard({ hideForm, addCard }: ICreateCardProps) {

  /**
   * Generates an array of objects representing time values in seconds and
   * their corresponding text representation in the format 'MM:SS'.
   *
   * @param limit  (optional): A number representing the upper limit in seconds (default: 300).
   * @returns An array of objects, where each object has the following properties:
   *    value: A string representing the time value in seconds.
   *    text: A string representing the time value in the format 'MM:SS'.
   */
  function generateSecondsInput(limit = 300): timePair[] {
    const output = [{ value: '30', text: '00:30' }];

    for (let i = 60; i <= limit; i += 30) {
      const min = Math.floor(i / 60);
      const mm = min > 9 ? String(min) : '0' + String(min);
      const ss = i % 60 === 0 ? '00' : '30';

      output.push({
        value: String(i),
        text: `${mm}:${ss}`
      });
    }
    return output;
  }

  const fiveMinutes = generateSecondsInput();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [seconds, setSeconds] = useState('');
  const [steps, setSteps] = useState(['']);

  function handleSteps(i: number, evt: React.ChangeEvent<HTMLInputElement>) {
    const newSteps = [...steps];
    newSteps[i] = evt.target.value;
    setSteps(newSteps);
  }

  function addStep(evt: React.FormEvent) {
    evt.preventDefault();
    setSteps([...steps, '']);
  }

  function removeStep(evt: React.FormEvent) {
    evt.preventDefault();
    setSteps([...steps.slice(0, -1)]);
  }

  function handleCancel() {
    setTitle('')
    setImage('')
    setQuantity('')
    setSeconds('')
    setSteps([''])
    hideForm()
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    console.debug('handleSubmit');
    addCard({
      title,
      image,
      steps,
      rules: {
        qty: Number(quantity) || null,
        seconds: Number(seconds) || null,
      }
    });
  }

  return (
    <div className="form-card">
      <h2 className="form-title">Create a new exercise</h2>
      <form className="form-body" action="" method="post">
        <div className="form-field">
          <label htmlFor="title">Title </label>
          <input placeholder="enter title..." type="text" name="title" id="item-0" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="img-dropdown">Image </label>
          <select name="img-dropdown" id="item-1" value={image} onChange={e => setImage(e.target.value)} >
            <option value="">-- Select --</option>
            <option value="pushup.png">Push Up</option>
            <option value="pullup.png">Pull Up</option>
            <option value="squat.png">Squat</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="qty">Reps </label>
          <input placeholder="enter rep count..." type="text" name="qty" id="item-2" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="seconds">Time </label>
          <select name="seconds" value={seconds} id="item-3" onChange={e => setSeconds(e.target.value)} >
            <option value=''>-- Timer (optional) --</option>
            {fiveMinutes.map((item, i) => <option key={`time-${i}`} id={`time-${i}`} value={item.value}>{item.text}</option>)}
          </select>
        </div>
        {steps.map((step, i) => (
          <div key={`step-${i}`} className="form-field">
            <label htmlFor="">{`Step ${i + 1} `}</label>
            <input placeholder="enter instructions..." type="text" name="" id="" value={step} onChange={(e) => handleSteps(i, e)} />
          </div>
        ))}
        <div className="step-btns">
          <button
            className="step-btn"
            type="button"
            disabled={!steps.length}
            onClick={removeStep}>- Step</button>
          <button
            className="step-btn"
            type="button"
            disabled={steps.length >= 10}
            onClick={addStep}>+ Step</button>
        </div>
        <div className="submit-btns">
          <button className="form-cancel" type="button" onClick={handleCancel}>Cancel</button>
          <button className="form-submit" onClick={handleSubmit}>Add New Card</button>
        </div>
      </form>
    </div>
  );
}
