import React from "react";

function ItemForm({ itemInput, onInputChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>New Item</p>
        <input
          type="text"
          onChange={(event) => onInputChange(event.target.value)}
          value={itemInput}
        />
      </label>
      <button type="submit" name="submit">
        Submit
      </button>
    </form>
  );
}

export default ItemForm;
