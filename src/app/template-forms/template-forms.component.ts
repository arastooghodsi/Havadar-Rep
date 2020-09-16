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

  user={
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
    this.user.username = this.inputForm.value.groupUser.username;
    this.user.email = this.inputForm.value.groupUser.email;
    this.user.gender = this.inputForm.value.gender;
    this.user.website= this.inputForm.value.website;
    this.user.educationDegree = this.inputForm.value.educationDegree;
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

  onClick(website) {
    // web = '';
    // web = website;
    if(this.inputForm.website.pattern.value)
      alert('yes');
  }

}
