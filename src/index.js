import React from 'react';
import ReactDOM from 'react-dom';


import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import TodoList from './components/TodoList';
import './styles.css';

const groceries = [];
const todos = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries,
      todos: todos,
      showShoppingList: true,
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false,
    };
    if (this.state.showShoppingList) {
      this.setState({
        ...this.state,
        groceries: [...this.state.groceries, newItem],
      });
    } else {
      this.setState({
        ...this.state,
        todos: [...this.state.todos, newItem],
      });
    }
  };

  toggleItem = (itemId) => {
    this.setState({
      ...this.state,
      groceries: this.state.groceries.map((item) => {
        if (item.id === itemId) {
          return { ...item, purchased: !item.purchased };
        }
        return item;
      }),
      todos: this.state.todos.map((item) => {
        if (item.id === itemId) {
          return { ...item, purchased: !item.purchased };
        }
        return item;
      }),
    });
  };

  clearPurchased = () => {
    if (this.state.showShoppingList) {
      this.setState({
        ...this.state,
        groceries: this.state.groceries.filter((item) => !item.purchased),
      });
    } else {
      this.setState({
        ...this.state,
        todos: this.state.todos.filter((item) => !item.purchased),
      });
    }
  };

  toggleView = () => {
    this.setState((prevState) => ({
      showShoppingList: !prevState.showShoppingList,
    }));
  };

  render() {
    const { showShoppingList } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>{showShoppingList ? 'Shopping List' : 'To Do List'}</h1>
          <button onClick={this.toggleView} >
            {showShoppingList ? 'Switch to To-Do List' : 'Switch to Shopping List'}
          </button>
          <ListForm addItem={this.addItem} />
        </div>
        {showShoppingList ? (
          <GroceryList toggleItem={this.toggleItem} groceries={this.state.groceries} />
        ) : (
          <TodoList
            toggleItem={this.toggleItem}
            todos={this.state.todos}
            addTodo={this.addItem}
            clearCompleted={this.clearPurchased}
          />
        )}
        <button onClick={this.clearPurchased} className="clear-btn">
          {showShoppingList ? 'Clear Purchases' : 'Clear Completed'}
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
