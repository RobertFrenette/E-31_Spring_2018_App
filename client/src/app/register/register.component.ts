import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error = false;
  errmsg = "";

  constructor(private router: Router) {}

  ngOnInit() { }

  onSubmit(f:any): void {
    console.log('submit');
    /*
    userName
    email
    password
    confirm
    */
  }

  onLogin(): void {
    this.router.navigate(['login']);
  }

}
