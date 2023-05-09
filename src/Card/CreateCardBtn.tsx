


interface CreateCardBtnProps {
  toggleForm: () => void;
  innerText: string;
}

/** CreateNewBtn
 * Button links to eitehr CreateCard or CreateDeck depending on
 * which props are passed in
 */
export function CreateNewBtn({ toggleForm, innerText }: CreateCardBtnProps) {
  return (
    <button
      onClick={toggleForm}
      className="create-new-btn">
      {innerText}
    </button>
  );
}