function Reducer(state, action) {
  switch (action.type) {
    case "click": {
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    }
    case "toggle": {
      return state.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task,
      );
    }
  }
}

export default Reducer