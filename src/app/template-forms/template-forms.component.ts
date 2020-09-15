import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  username: string = "";
  email: string = "";
  gender: string = "";

  @ViewChild('f') inputForm: NgForm

  // onSubmit(form: HTMLFormElement) {
  //   console.log(form);
  // }

  data: any[];
  onSubmit() {
    console.log(this.inputForm);
    // alert(this.username + " , " + this.email + " , " + this.gender);
    if(this.email == ""){
      alert(this.email);
    }
  }

}
