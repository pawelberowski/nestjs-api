import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { EmployeesModule } from './employees/employees.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [ArticlesModule, EmployeesModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
