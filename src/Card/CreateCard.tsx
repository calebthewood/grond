import { useState } from "react";

interface IFormData {
  title: string;
  description: string;
  image: string;
}

/** CreateCard
 * Form component used to enter a new workout card for use in a deck
 */
export function CreateCard() {

  const [formData, setFormData] = useState<IFormData>({
    title: '',
    description: '',
    image: '',
  });

  const [formErrors, setFormErrors] = useState<IFormData>({
    title: '',
    description: '',
    image: ''
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

    // expand this to be cover more cases than just empty.
    for (const [field, value] of Object.entries(formData)) {
      if (value === '') {
        setFormErrors({ ...formErrors, [field]: 'Text Required' });
      }
    }
    if (Object.values(formErrors).some((value) => value.length > 0))
      console.log('Put this somewhere', formData);
  }

  return (
    <div>
      <h2>Create a new exercise</h2>
      <form onSubmit={handleSubmit} action="" method="post">
        <p>{formErrors.title}</p>
        <label htmlFor="">Workout Title
          <input type="text" name="title" id="title" onChange={handleChange} value={formData.title} />
        </label>
        <p>{formErrors.description}</p>
        <label htmlFor="">Workout Description
          <input type="text" name="description" id="description" onChange={handleChange} value={formData.description} />
        </label>
        <p>{formErrors.image}</p>
        <label htmlFor="">Workout Image
          <input type="text" name="image" id="image" onChange={handleChange} value={formData.image} />
        </label>
        <button>Add New Workout!</button>
      </form>
    </div>
  );
}
