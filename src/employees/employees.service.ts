import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from './employee';
import { EmployeeDto } from './employee.dto';
import { ArticleDto } from '../articles/article.dto';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];
  private nextCreatedEmployeeId = 1;

  getAll() {
    return this.employees;
  }

  getById(id: number) {
    const employee = this.employees.find((item) => {
      return item.id === id;
    });
    if (!employee) {
      throw new NotFoundException();
    }
    return employee;
  }

  create(employee: EmployeeDto) {
    const newEmployee: Employee = {
      id: this.nextCreatedEmployeeId++,
      name: employee.name,
      position: employee.position,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  update(id: number, employee: EmployeeDto) {
    const employeeIndex = this.employees.findIndex(
      (employee) => employee.id === id,
    );
    if (employeeIndex === -1) {
      throw new NotFoundException();
    }
    this.employees[employeeIndex] = {
      ...this.employees[employeeIndex],
      name: employee.name,
      position: employee.position,
    };
    return this.employees[employeeIndex];
  }

  delete(id: number) {
    const employeeIndex = this.employees.findIndex(
      (employee) => employee.id === id,
    );
    if (employeeIndex === -1) {
      throw new NotFoundException();
    }
    this.employees.splice(employeeIndex, 1);
  }
}
