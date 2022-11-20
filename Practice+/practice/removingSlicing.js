function removeFromList(todos, index) {
    const toDoList = [...todos.slice(index +1)];
    return toDoList;
  }
const list = ["I am doin", "they are here", "time for fun"];
const num = 0;
  console.log(removeFromList(list, num));