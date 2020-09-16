import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  public formValid = false;
  educationDegrees = ['دیپلم', 'لیسانس', 'فوق لیسانس', 'دکتری'];
  web = '';

  @ViewChild('f') inputForm: NgForm
  @ViewChild('group1') inputValidForm: NgForm
  // @ViewChild('username') inputUpdateUsername: NgForm

  defaultGender = 'آقا';
  website = '';
  data: any[];

  users={
    username: '',
    email: '',
    gender: '',
    website: '',
    educationDegree: '',
    // score: ''
  };

  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    this.users.username = this.inputForm.value.groupUser.username;
    this.users.email = this.inputForm.value.groupUser.email;
    this.users.gender = this.inputForm.value.gender;
    this.users.website= this.inputForm.value.website;
    this.users.educationDegree = this.inputForm.value.educationDegree;
    // this.user.score = this.inputForm.value.score;

    console.log(this.inputForm);
    if(!this.inputValidForm.valid) {
      this.formValid = true;
    }
    // if(!this.inputValidForm.form.updateOn) {
    //   this.formValid = true;
      // alert('yes');
    // }

  }

  onClick() {
      alert(this.inputForm.value.website);
  }

}
