function TaskQuickAdd({ text, setText ,handleClick}) {
  

  return (
    <div className="card  mx-auto p-4 max-w-2xl ">
      <h2 className="p-4 font-semibold text-gray-400 ">Task Title</h2>
      <form onSubmit={handleClick}>
        <input
          className="border textField__input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex flex-row justify-end">
          <button className=" btn--primary my-4 ">Add</button>
        </div>
      </form>
    </div>
  );
}

export default TaskQuickAdd;
