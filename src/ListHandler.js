import "./styles.css";

function ListHandler({ toDoList, setToDOList }) {
  const deleteEvent = (key) => {
    const newList = toDoList.filter((itemsToDo) => {
      return key !== itemsToDo.key;
    });
    setToDOList(newList);
  };

  return (
    <div>
      {toDoList.map((itemsToDo) => {
        return (
          <div className="todo-list">
            {" "}
            <ul>
              <li>{itemsToDo.item}</li>
            </ul>
            <button
              className="delete-btn"
              onClick={() => deleteEvent(itemsToDo.key)}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default ListHandler;
