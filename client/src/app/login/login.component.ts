import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String = '';
  error = true;
  errmsg = "This is a test.";

  constructor(private router: Router) {}

  ngOnInit() { }

  onRegister(): void {
    this.router.navigate(['register']);
  }

  onSubmit(): void {
    console.log('submit');
    /*
    userName
    password
    */
    this.router.navigate(['dashboard', {userName: this.userName}]);
  }

  onPasswordReset(): void {
    this.router.navigate(['reset']);
  }

}
