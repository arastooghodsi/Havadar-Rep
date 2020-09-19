import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fan } from '../fan';
import { FANS } from '../fanTableData';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  public formValid = false;
  educationDegrees = ['دیپلم', 'لیسانس', 'فوق لیسانس', 'دکتری'];
  // fans: Fan[] = [][];

  @ViewChild('f') inputForm: NgForm
  @ViewChild('group1') inputValidForm: NgForm
  // @ViewChild('username') inputUpdateUsername: NgForm

  defaultGender = 'آقا';
  website = '';
  data: any[];

  fans = FANS;
  // fans: Fan[];
  // selectedFan = Fan;
  users = {
    username: '',
    email: '',
    gender: '',
    website: '',
    educationDegree: ''
    // score: '']]
  };

  // fan: FANS[];
  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    // this.users.push(this.inputForm.value.groupUser.username, this.inputForm.value.groupUser.email,
    //   this.inputForm.value.gender, this.inputForm.value.website, this.inputForm.value.educationDegree);
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
