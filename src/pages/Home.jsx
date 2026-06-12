import { useEffect, useState } from "react";
import TaskQuickAdd from "../components/TaskQuickAdd";
import TasksList from "../components/TasksList";

function Home() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(() => {
    const saveItems = localStorage.getItem("items");
    return saveItems ? JSON.parse(saveItems) : [];
  });

  function handleClick(e) {
    e.preventDefault();
    setItems([...items, text]);
    setText("");
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="mt-10 ">
      <TaskQuickAdd text={text} setText={setText} handleClick={handleClick} />
      <hr className="my-8 border-slate-300 mx-auto max-w-2xl " />
      <div className="mx-auto max-w-2xl font-semibold ">Task List</div>
      <TasksList items={items} />
    </div>
  );
}

export default Home;
