import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo';
import { TodoDto } from './todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private nextCreatedTodoId = 1;

  getAll() {
    return this.todos;
  }

  getById(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  create(todo: TodoDto) {
    const newtodo = {
      id: this.nextCreatedTodoId++,
      ...todo,
    };
    this.todos.push(newtodo);
    return newtodo;
  }

  update(id: number, todo: TodoDto) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new NotFoundException();
    }
    this.todos[todoIndex] = {
      ...this.todos[todoIndex],
      title: todo.title,
      completed: todo.completed,
    };
    return this.todos[todoIndex];
  }

  delete(id: number) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new NotFoundException();
    }
    this.todos.splice(todoIndex, 1);
  }
}
