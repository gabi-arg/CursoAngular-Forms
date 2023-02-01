
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {
  formsLogin: FormGroup;

  constructor(){

    let regexEmail: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let controles: any = {

      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.pattern(regexEmail)]),
      message: new FormControl('',[Validators.required]),
    }
    this.formsLogin = new FormGroup(controles)
  }
  login(){

  }


}
