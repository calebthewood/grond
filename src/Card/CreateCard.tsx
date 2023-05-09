import { useState } from "react";

interface IFormData {
  title: string;
  description: string;
  image: string;
  steps: string[];
}

/** CreateCard
 * Form component used to enter a new workout card for use in a deck
 */
export function CreateCard() {

  const [partA, setPartA] = useState(true);
  const [formData, setFormData] = useState<IFormData>({
    title: '',
    description: '',
    image: '',
    steps: [''],
  });

  const [formErrors, setFormErrors] = useState<IFormData>({
    title: '',
    description: '',
    image: '',
    steps: [''],
  });

  /** Handle form data changing */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    // reset the error msg once field is typed in.
    setFormErrors(f => ({
      ...f,
      [name]: ''
    }));
  }

  /** Handle form submit
   * - place in local storage for now?
   * - or add it to state at app level?
   */
  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    console.debug('handleSubmit');
    // expand this to be cover more cases than just empty.
    for (const [field, value] of Object.entries(formData)) {
      if (value === '') {
        setFormErrors({ ...formErrors, [field]: 'Text Required' });
      }
    }
    if (Object.values(formErrors).some((value) => value.length > 0)) {
      console.log('Put this somewhere', formData);
    }

  }

  function addStep() {
    const newData = formData;
    newData.steps.push('');
    setFormData(newData);
  }

  function removeStep() {
    const newData = formData;
    newData.steps.pop();
    setFormData(newData);
  }

  return (
    <div>
      <h2>Create a new exercise</h2>
      <form onSubmit={handleSubmit} action="" method="post">
        {partA ?
          <>
            <h3>Side A: Details</h3>
            <p>{formErrors.title}</p>
            <label htmlFor="">Title
              <input type="text" name="title" id="title" onChange={handleChange} value={formData.title} />
            </label>
            <p>{formErrors.description}</p>
            <label htmlFor="">Description
              <input type="text" name="description" id="description" onChange={handleChange} value={formData.description} />
            </label>
            <p>{formErrors.image}</p>
            <label htmlFor="">Image
              <input type="text" name="image" id="image" onChange={handleChange} value={formData.image} />
            </label>
            <button onClick={() => setPartA(false)}>Next: Add Steps</button>
          </> : <>
            <h3>Side B: Steps</h3>

            {formData.steps.map((step, i) =>
              <>
                <p>{formErrors.steps[i]}</p>
                <label htmlFor="">{`Step ${(++i)}`} </label>
                <input
                  type="text"
                  name={`step-${i}`}
                  id={`step-${i}`}
                  onChange={handleChange}
                  value={formData.steps[i]} />
              </>
            )}
            <div>
              <button
                disabled={!formData.steps.length}
                onClick={removeStep}>- Step</button>
              <button
                disabled={formData.steps.length >= 10}
                onClick={addStep}>+ Step</button>
            </div>
            <button onClick={handleSubmit}>Done: Add Card!</button>
          </>}


      </form>
    </div>
  );
}
