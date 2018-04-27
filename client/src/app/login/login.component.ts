import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth/auth.service';
import { NavService } from '../providers/nav/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String = '';
  user_id = '';
  error = false;
  errmsg = '';
  
  constructor(
    private navService: NavService,
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit() {
    /*
    let persistedName = localStorage.getItem('user_name');

    if (persistedName !== null) {
      this.userName = JSON.parse(persistedName);
    } else {
      this.userName = '';
    }
    */
  }

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
          this.user_id = result._id;
        },
        error => {
          //console.log(error);
          this.errmsg = 'Login unsuccessful.';
          this.error = true;
        },
        () => {
          // 'onCompleted' callback.
          // Check "Remeber Me"
          /*
          if (!f.rememberMe) {
            localStorage.removeItem('user_name');
            console.log(localStorage.getItem('user_name'));
          } else {
            localStorage.setItem('user_name', JSON.stringify(f.userName));
            console.log(localStorage.getItem('user_name'));
          }
          */
          this.navService.sendMessage(true);
          // No errors, route to new page here
          this.router.navigate(['dashboard', {userName: f.userName, user_id: this.user_id}]);
        }
      );
    }
  }

  onPasswordReset(): void {
    this.router.navigate(['reset']);
  }

}
