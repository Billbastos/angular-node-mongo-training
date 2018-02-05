import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  
  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[a-z]{1,10}(\.[a-z]{1,10})?@+[a-z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$")
      ]),
      password: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }

  myForm: FormGroup;


}