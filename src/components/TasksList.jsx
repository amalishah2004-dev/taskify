function TasksList({ items, handleToggle }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          //<span className="flex flex-row items-center justify-center ">
          <li className="card mx-auto p-4 m-4 max-w-2xl " key={item.id}>
            <input
              className="mr-2"
              type="checkbox"
              checked={item.done}
              onChange={() => {
                handleToggle(item.id);
              }}
            />
            {item.text}
          </li>
          //</span>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
