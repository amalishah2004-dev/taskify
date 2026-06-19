import { useEffect, useReducer, useState } from "react";
import TaskQuickAdd from "../components/TaskQuickAdd";
import TasksList from "../components/TasksList";
import Reducer from "../features/Reducer";



function Home() {
  const [items, dispatch] = useReducer(Reducer, [], () => {
    const saveItems = localStorage.getItem("items");
    return saveItems ? JSON.parse(saveItems) : [];
  });

  const [text, setText] = useState("");

  const handleToggle = (taslId) => {
    dispatch({ type: "toggle", payload: taslId });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "click", payload: text });
    setText("");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="mt-10 ">
      <TaskQuickAdd text={text} setText={setText} handleClick={handleClick} />
      <hr className="my-8 border-slate-300 mx-auto max-w-2xl " />
      <div className="mx-auto max-w-2xl font-semibold ">Task List</div>
      <TasksList items={items} handleToggle={handleToggle} />
    </div>
  );
}

export default Home;
