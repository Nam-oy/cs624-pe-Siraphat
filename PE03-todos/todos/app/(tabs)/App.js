// Listing 3.19 Passing toggleComplete and deleteTodo as props to TodoList
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };

    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos = async () => {
    try {
      const response = await fetch('https://cityutodoapi.azurewebsites.net/todos');
      const todos = await response.json();

      // Update todoIndex based on fetched todos
      todoIndex =
        todos.length > 0
          ? Math.max(...todos.map((t) => t.todoIndex || 0)) + 1
          : 0;

      this.setState({ todos });
    } catch (error) {
      console.error(error);
    }
  };

  submitTodo() {
    if (this.state.inputValue.trim() === '') {
      return;
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;

    const todos = [...this.state.todos, todo];
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State:', this.state);
    });
  }

  deleteTodo(todoIndex) {
    const todos = this.state.todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  toggleComplete(todoIndex) {
    const todos = this.state.todos.map((todo) => {
      if (todo.todoIndex === todoIndex) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({ todos });
  }

  inputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  setType(type) {
    this.setState({ type });
  }

  render() {
    const { todos, inputValue, type } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
          />
          <TodoList
            type={type}
            todos={todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <Button
            title="Submit"
            submitTodo={this.submitTodo}
          />
        </ScrollView>

        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
