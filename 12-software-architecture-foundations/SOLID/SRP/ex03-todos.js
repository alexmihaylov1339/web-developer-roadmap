class ToDoService {
  constructor() {
    this.todoItems = [];
  }
  createToDo(item) {
    const todoItem = {
      id: Date.now(),
      title: item.title,
      completed: false,
    };
    this.todoItems.push(todoItem);

    return todoItem;
  }

  updateToDo(itemId, updatedItem) {
    // Simulate updating the todo item in a database
    console.log(`Updating todo with ID: ${itemId}, new title: ${updatedItem.title}`);
  }

  deleteToDo(itemId) {
    // Simulate deleting the todo item from a database
    console.log(`Deleting todo with ID: ${itemId}`);
  }
  getAllTodos() {
    return this.todoItems;
  }
}

class ToDoRenderer {
  render(todoItem) {
    console.log(`To-Do Item: [${todoItem.id}] ${todoItem.title} - Completed: ${todoItem.completed}`);
  }
}

const todoService = new ToDoService();
const newToDo = todoService.createToDo({ title: "Learn SOLID Principles" });

const todoRenderer = new ToDoRenderer();
todoRenderer.render(newToDo);

const todo2 = todoService.createToDo({ title: "Practice coding" });

todoService.updateToDo(todo2.id, {title: "Updated: todo2"})

const allTodos = todoService.getAllTodos();

console.log("All To-Do Items:");
allTodos.forEach((todo) => {
  todoRenderer.render(todo);
});
