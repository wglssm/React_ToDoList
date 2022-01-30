import React, { Component } from "react";
import Header from "../src/components/Header";
import List from "../src/components/List";
import Footer from "../src/components/Footer";

import ".//App.css";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "Eat", done: true },
      { id: "002", name: "Sleep", done: true },
      { id: "003", name: "Coding", done: false },
      { id: "004", name: "Shopping", done: true },
    ],
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;

    const newTodos = [todoObj, ...todos];

    this.setState({ todos: newTodos });
  };

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({ todos: newTodos })
  }

  clearAllTodo = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) =>{
      return !todoObj.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <img className="todo-icon" src={require("../src/icon-to-do.png")} alt="icon" />
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllTodo={this.clearAllTodo}/>
        </div>
      </div>
    );
  }
}
