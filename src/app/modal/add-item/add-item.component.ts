import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToDoModel } from '../../models/todo.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent implements OnInit {
  submitted = false;
  todo?: ToDoModel;

  constructor(public activeModal: NgbActiveModal, ) {}

  ngOnInit(): void {
    if (this.todo) {
      this.addItemForm.patchValue({
        title: this.todo.title,
        description: this.todo.description
      })
    }
  }

  addItemForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });

  get title() {
    return this.addItemForm.get('title');
  }

  onSave() {
    this.submitted = true;
    if (this.addItemForm.invalid) {
      return;
    }
    this.activeModal.dismiss(this.addItemForm.value);
  }

  onUpdate() {
    this.submitted = true;
    if (this.addItemForm.invalid) {
      return;
    }
    this.activeModal.dismiss({...this.addItemForm.value, id: this.todo?.id});
  }

}
