import React, { Component } from "react";
import PropTypes from "prop-types";

import Item from "../Item";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <div>
        <ul className="todo-main">
          {todos.map((todo) => {
            return (
              <Item
                key={todo.id}
                {...todo}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
