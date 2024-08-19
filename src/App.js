import React, { useEffect, useState } from "react";
import "./App.css";
import { getList, setItem, deleteItem } from "./services/list";

function App() {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const items = await getList();
        setList(items);
      } catch (error) {
        console.error("Error fetching list:", error);
      }
    };

    if (list.length === 0 || alert) {
      fetchList();
    }
  }, [alert, list.length]);

  useEffect(() => {
    if (alert) {
      const timeoutId = setTimeout(() => setAlert(false), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [alert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemInput.trim()) return; // Prevent submitting empty or whitespace-only items

    try {
      await setItem(itemInput);
      setItemInput("");
      setAlert(true);
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  const handleDelete = (e, item) => {
    e.preventDefault();
    console.log(item);
    deleteItem(item.id)
      .then((res) => setList(list.slice(list.indexOf(res.id),1)))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h1>My Grocery List</h1>
      <ul>
        {list.map((item) => (
          <li key={item.item} onClick={(e) => handleDelete(e, item)}>
            {item.item}
          </li>
        ))}
      </ul>
      {alert && <h2>Submit Successful</h2>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input
            type="text"
            onChange={(event) => setItemInput(event.target.value)}
            value={itemInput}
          />
        </label>
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
