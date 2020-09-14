import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-fans-form',
  templateUrl: './fans-form.component.html',
  styleUrls: ['./fans-form.component.css']
})
export class FansFormComponent {

  // teamFavorites = ['Perspolis', 'Esteghlal', 'Sepahan', 'Tractor', 'Others'];
  //
  // model = new Hero(18, 'arastoo', '1366', this.teamFavorites[0]);
  //
  // submitted = false;
  //
  // constructor() { }
  //
  // ngOnInit(): void {
  // }
  //
  // onSubmit() {
  //   this.submitted = true;
  // }
  //
  // get diagnostic() {
  //   return JSON.stringify(this.model);
  // }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    const myHero =  new Hero(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }

}
