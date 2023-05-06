import { useState } from "react";

/** CreateCard
 * Form component used to enter a new workout card for use in a deck
 */
export function CreateCard() {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  });
  const [formErrors, setFormErrors] = useState([]);

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  return (
    <div>
      <form action="" method="post">
        <label htmlFor="">Workout Title
          <input type="text" name="title" id="" value={formData.title} />
        </label>
        <label htmlFor="">Workout Description
          <input type="text" name="description" id="" value={formData.description} />
        </label>
        <label htmlFor="">Workout Image
          <input type="text" name="image" id="" value={formData.image} />
        </label>
        <button>Add New Workout!</button>
      </form>
    </div>
  );
}