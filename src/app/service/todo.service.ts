import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDoModel } from '../models/todo.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  filteredTodoListSubject$ = new BehaviorSubject<ToDoModel[]>([]);
  todoListSubject$ = new BehaviorSubject<ToDoModel[]>([
    {
      id: 1,
      title: 'Sample Task 1',
      description: 'This is a sample description for task 1.',
      done: false,
    },
    {
      id: 2,
      title: 'Sample Task 2',
      description: 'This is a sample description for task 2.',
      done: false,
    },
    {
      id: 3,
      title: 'Sample Task 3',
      description: 'This is a sample description for task 2.',
      done: false,
    },
  ]);
  todoList$ = this.todoListSubject$.asObservable();
  filteredTodoList$ = this.filteredTodoListSubject$.asObservable();
  

  constructor(private toastr: ToastrService) {
    this.filteredTodoListSubject$.next(this.todoListSubject$.getValue());
  }

  ngOnInit() {
  }

  // private sortAndSetTodoList(todoList: ToDoModel[]) {
  //   const sortedList = todoList.sort((x, y) => x.done === y.done ? 0 : x.done ? 1 : -1);
  //   this.todoListSubject$.next(sortedList);
  // };

  saveNewItem(item: { title: string; description: string }) {
    const currentList = this.todoListSubject$.getValue();
    let max = Math.max(0, ...currentList.map((todo) => todo.id));
    const newList = [
      ...currentList,
      {
        id: max + 1,
        title: item.title,
        description: item.description,
        done: false,
      },
    ];
    this.todoListSubject$.next(newList);
    this.filteredTodoListSubject$.next(newList);
    this.filter('all');

    this.toastr.success('New task added!');

  }

  sortTodo() {
    const currentList = this.todoListSubject$.getValue();
    const sortedList = currentList
      .slice()
      .sort((x, y) => x.id - y.id)
      .sort((x, y) => (x.done === y.done ? 0 : x.done ? 1 : -1));
    this.todoListSubject$.next(sortedList); 
  }
  deleteItem(id: number) {
    const currentList = this.todoListSubject$.getValue();
    const newList = currentList.filter(todo => todo.id !== id);
    this.todoListSubject$.next(newList);
    this.filteredTodoListSubject$.next(newList);
    this.toastr.error('Task deleted!');
  }

  updateItem(updatedTodo: ToDoModel) {
    const currentList = this.todoListSubject$.getValue();
    const index = currentList.findIndex(item => item.id === updatedTodo.id);
    console.log(index);
    if (index !== -1) {
       currentList[index].title = updatedTodo.title;
       currentList[index].description = updatedTodo.description;
       this.todoListSubject$.next(currentList);
       this.toastr.warning('Task updated!');

    }

}

filter(filter: 'all' | 'done' | 'undone') {
  const currentList = this.todoListSubject$.getValue();
  console.log(currentList);
  if(filter === 'all') {
    this.filteredTodoListSubject$.next(currentList);
  }
  else if (filter === 'done') {
    this.filteredTodoListSubject$.next(currentList.filter(item => item.done));
  }  
  else if (filter === 'undone') {
    this.filteredTodoListSubject$.next(currentList.filter(item => !item.done));

  }
}
}