import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String = '';
  error = false;
  errmsg = '';

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit() { }

  onRegister(): void {
    this.router.navigate(['register']);
  }

  onSubmit(f:any): void {
    if (f.userName === '' || f.password === '') {
      this.errmsg = 'User Name and Password are required.';
      this.error = true;
    } else {
      this.authService.login(f.userName, f.password)
      .subscribe(
        result => {
          // Handle result
          //console.log(result);
        },
        error => {
          //console.log(error);
          this.errmsg = 'Login unsuccessful.';
          this.error = true;
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
          this.router.navigate(['dashboard', {userName: this.userName}]);
        }
      );
    }
  }

  onPasswordReset(): void {
    this.router.navigate(['reset']);
  }

}
