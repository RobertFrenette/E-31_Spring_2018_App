import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String = '';

  constructor(private router: Router) {}

  ngOnInit() { }

  onRegister(): void {
    this.router.navigate(['register']);
  }

  onSubmit(): void {
    this.router.navigate(['dashboard', {userName: this.userName}]);
  }

  onPasswordReset(): void {
    this.router.navigate(['reset']);
  }

}
