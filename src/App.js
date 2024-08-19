import React, { useEffect, useState } from "react";
import "./App.css";
import { getList, setItem, deleteItem } from "./services/list";
import List from "./components/List";
import Alert from "./components/Alert";
import ItemForm from "./components/ItemForm";

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
    if (!itemInput.trim()) return;

    try {
      await setItem(itemInput);
      setItemInput("");
      setAlert(true);
    } catch (error) {
      console.error("Error setting item:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await deleteItem(itemId);
      setList(list.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting list item:", error);
    }
  };

  return (
    <>
      <h1>My Grocery List</h1>
      <List items={list} onDelete={handleDelete} />
      {alert && <Alert message="Submit Successful" />}
      <ItemForm
        itemInput={itemInput}
        onInputChange={setItemInput}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
