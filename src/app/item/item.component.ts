import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { ToDoModel } from '../models/todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Output() itemChecked: EventEmitter<{id: number, done:boolean}> = new EventEmitter();
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  @Output() editItem: EventEmitter<ToDoModel> = new EventEmitter();

  @Input() todo!: ToDoModel;


  checkboxChange() {
    this.itemChecked.emit();
  }

  deleteClick(id: number) {
    this.deleteItem.emit(id);
  }

  editClick(todo: ToDoModel) {
    this.editItem.emit(todo);
  }

 
  
  constructor() {}

}
