import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fan } from '../fan';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit{

  public formValid = false;
  educationDegrees = ['دیپلم', 'لیسانس', 'فوق لیسانس', 'دکتری'];
  // fans: object;

  constructor() {
  }

  ngOnInit(): void {
    // this.fans = Fan;
  }

  @ViewChild('f') inputForm: NgForm
  @ViewChild('group1') inputValidForm: NgForm
  // @ViewChild('username') inputUpdateUsername: NgForm

  defaultGender = 'آقا';
  website = '';
  data: any[];

  fans = [
    { username: '' },
    { email: '' },
    { gender: '' },
    { website: '' },
    { educationDegree: '' }
    // score: ''
  ];


  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    this.fans.push(this.inputForm.value.groupUser.username);
    this.fans.push(this.inputForm.value.groupUser.email);
    this.fans.push(this.inputForm.value.gender);
    this.fans.push(this.inputForm.value.website);
    this.fans.push(this.inputForm.value.educationDegree);

    // this.fans.username = this.inputForm.value.groupUser.username;
    // this.fans.email = this.inputForm.value.groupUser.email;
    // this.fans.gender = this.inputForm.value.gender;
    // this.fans.website= this.inputForm.value.website;
    // this.fans.educationDegree = this.inputForm.value.educationDegree;
    // this.user.score = this.inputForm.value.score;

    console.log(this.inputForm);
    if(!this.inputValidForm.valid) {
      this.formValid = true;
    }

    this.inputForm.reset();

  }

  onClick() {
      alert(this.inputForm.value.website);
  }

}
