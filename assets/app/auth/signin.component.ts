import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  ngOnInit(): void {
    this.myForm = new FormGroup({
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