import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../service/todo.service';
import { AddItemComponent} from '../modal/add-item/add-item.component';
import { ToDoModel } from '../models/todo.model';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  filter: 'all' | 'done' | 'undone' = 'all';
  constructor (
    public todoService: TodoService,
    private modalService: NgbModal,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filter =  params['filter'];
      this.todoService.filter(this.filter);
    });
   
  }

addButton() {
  const modalRef = this.modalService.open(AddItemComponent, {
    centered: true,
  });
  modalRef.dismissed.subscribe(value => {
    this.todoService.saveNewItem(value);
    this.todoService.filter(this.filter);
  })
}

itemChecked() {
  this.todoService.sortTodo();
  this.todoService.filter(this.filter);
}
deleteItem(id: number) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.todoService.deleteItem(id);
      this.todoService.filter(this.filter);
    }
  });
  
}
editItem(todo: ToDoModel) {
  const modalRef = this.modalService.open(AddItemComponent, {
    centered: true,
  });
  modalRef.componentInstance.todo = todo;
  modalRef.dismissed.subscribe(value => {
    this.todoService.updateItem(value)
  })
}
}
