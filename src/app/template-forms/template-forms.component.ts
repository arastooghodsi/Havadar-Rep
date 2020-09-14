import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('f') courseForm: NgForm;

  onSubmit(form: NgForm) {
    console.log("Course Name is : " + form.value.courseName);
    console.log("Course Desc is : " + form.value.courseDesc);
    console.log("Course Amount is : " + form.value.courseAmount);
  }

  onClear() {
    this.courseForm.reset();
  }

  onDelete() {

  }

  ngOnDestroy() {

  }

}