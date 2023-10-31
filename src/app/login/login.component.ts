import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export class User {
    public name!: string;
    public email!: string;
    public password!: string;
    public hobbies!: string;
  }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'bootstrap-popup';
  loginForm!: FormGroup;
  model = new User();
  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking',
  ];
  onSubmit(form: any) {
    console.log(form.value);
  }
  constructor() { }

  ngOnInit(): void {
  }


  loginFormSubmit(): void {
    debugger
    // Call Api
  }
}