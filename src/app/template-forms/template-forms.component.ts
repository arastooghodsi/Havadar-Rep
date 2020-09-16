import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  public formValid = false;
  @ViewChild('f') inputForm: NgForm
  @ViewChild('group1') inputValidForm: NgForm
  // @ViewChild('username') inputUpdateUsername: NgForm

  defaultGender = 'male';
  color = '';
  data: any[];
  onSubmit() {
    console.log(this.inputForm);
    if(!this.inputValidForm.valid) {
      this.formValid = true;
    }
    if(!this.inputValidForm.form.updateOn) {
      // this.formValid = true;
      alert('yes');
    }
    // if(this.inputUpdateUsername.errors)
    //   alert('yes');
  }

}
