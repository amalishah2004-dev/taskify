function TasksList({items}) {
  return (
    <div>
      
      <ul>
        {items.map((item, index) => (
          <span className="flex flex-row items-center justify-center ">
            <li className="card mx-auto p-4 m-4 max-w-2xl " key={index}>
              <button className="rounded-full w-5 h-5 border mr-2 "></button>
              {item}
            </li>
          </span>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
