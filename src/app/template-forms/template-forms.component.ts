import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  @ViewChild('f') inputForm: NgForm

  // onSubmit(form: HTMLFormElement) {
  //   console.log(form);
  // }

  defaultGender = 'male';
  color = '';
  data: any[];
  onSubmit() {
    console.log(this.inputForm);
    // alert(this.username + " , " + this.email + " , " + this.gender);

  }

}
