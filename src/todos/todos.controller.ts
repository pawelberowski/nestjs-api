import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDto } from './todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.getById(id);
  }

  @Post()
  create(@Body() todo: TodoDto) {
    return this.todosService.create(todo);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() todo: TodoDto) {
    return this.todosService.update(id, todo);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.todosService.delete(id);
  }
}
