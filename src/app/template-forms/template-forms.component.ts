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

  @ViewChild('f') inputForm: NgForm;
  @ViewChild('group1') inputValidForm: NgForm;
  // @ViewChild('username') inputUpdateUsername: NgForm

  defaultGender = 'آقا';
  website = '';
  data: any[];

  fans: Fan[];
  users: any = [{
    username: 'ارسطو',
    email: 'arar@atata ',
    gender: 'آقا',
    website: 'ww.sik.com',
    educationDegree: 'فوق لیسانس'
    // score: '']]
  }];

  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
    // this.fans.push(
    //   {
    //     fans.username = this.inputForm.value.groupUser.username
    //     fans.email = this.inputForm.value.groupUser.email,
    //     fans.gender = this.inputForm.value.gender,
    //     fans.website = this.inputForm.value.website,
    //     fans.edudationDegree = this.inputForm.value.educationDegree'
    //   });
    this.users.username = this.inputForm.value.groupUser.username;
    this.users.email = this.inputForm.value.groupUser.email;
    this.users.gender = this.inputForm.value.gender;
    this.users.website = this.inputForm.value.website;
    this.users.educationDegree = this.inputForm.value.educationDegree;

    // this.user.score = this.inputForm.value.score;

    console.log(this.inputForm);
    if (!this.inputValidForm.valid) {
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


// checkboxCart: string = 'برداشت از حساب با کارت';
// checkboxUnCart: string = 'برداشت از حساب بدون کارت';
// public onChangeCheckboxCart(event: Event) {
//   if((event.target as HTMLInputElement).checked)
//     this.checkboxCart = (event.target as HTMLInputElement).value;
//   // alert(this.checkboxCart);
// }
//
// public onChangeCheckboxUnCart(event: Event) {
//   if((event.target as HTMLInputElement).checked)
//     this.checkboxUnCart = (event.target as HTMLInputElement).value;
//   // alert(this.checkboxUnCart);
// }
