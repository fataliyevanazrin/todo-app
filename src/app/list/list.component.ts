import { Component, EventEmitter, Output } from '@angular/core';
import { ToDoModel } from '../models/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
@Output() itemChecked: EventEmitter<{id: number, done:boolean}>= new EventEmitter();
@Output() deleteItem: EventEmitter<number> = new EventEmitter();
@Output() editItem: EventEmitter<ToDoModel> = new EventEmitter();

constructor(private todoService: TodoService) {}
todoList$ = this.todoService.filteredTodoList$;



checkboxChange() {
  this.itemChecked.emit();
}
deleteClick(id: number) {
  this.deleteItem.emit(id);
}
editClick(todo: ToDoModel){
  this.editItem.emit(todo);
}
}
