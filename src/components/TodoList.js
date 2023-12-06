import React from "react";
import Item from "./Item";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map((todo) => (
        <Item
          toggleItem={props.toggleItem}
          key={todo.id}
          item={todo}
          itemType="todo"
        />
      ))}
    </div>
  );
};

export default TodoList;
