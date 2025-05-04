#Input
Data and interactions the app receives:

- User input: Text entered into the Input component.

- Button tap: User taps the "Submit" button.

- Todo item tap: User taps a todo item to toggle its completion status.

- Delete button tap: User taps delete to remove a todo.

- Tab selection: User selects a filter tab (All, Active, Completed).

#Process
Logic the app performs in response to input:

- inputChange(inputValue): Updates the inputValue in state when user types.

- submitTodo():

    - Ignores empty or whitespace-only input.

    - Creates a new todo item with a unique todoIndex and complete: false.

    - Adds the todo to the todos array in state.

- toggleComplete(todoIndex):

    - Flips the complete value of the todo with the matching todoIndex.

- deleteTodo(todoIndex):

    - Removes the todo from the todos array using filter().

- setType(type):

    - Changes the current tab filter type (All, Active, Completed).

#Output
What the app renders on screen:

- Heading: Title/header of the app.

- Input: Text field bound to inputValue.

- TodoList: Displays a list of todos, filtered by type. Allows toggling and deleting.

- Button: Submit button for adding new todos.

- TabBar: Tab buttons to switch between All / Active / Completed views.