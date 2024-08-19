import React from "react";

function List({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onDelete(item.id)}>
          {item.item}
        </li>
      ))}
    </ul>
  );
}

export default List;
