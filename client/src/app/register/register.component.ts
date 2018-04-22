import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error = false;
  errmsg = "";

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit() { }

  onSubmit(f:any): void {
    if (f.userName === '' || f.email === '' || f.password === '' || f.confirm === '') {
      this.errmsg = 'All fields are required.';
      this.error = true;
    } else {
      if (f.password !== f.confirm) {
        this.errmsg = 'Passwords must match!'
        this.error = true;
      } else {
        this.authService.register(f.userName, f.email, f.password)
        .subscribe(
          result => {
            // Handle result
            //console.log(result);
          },
          error => {
            //console.log(error);
            this.errmsg = 'Registration unsuccessful.';
            this.error = true;
          },
          () => {
            // 'onCompleted' callback.
            // No errors, route to new page here
            this.router.navigate(['login']);
          }
        );
      }
    }
  }

  onLogin(): void {
    this.router.navigate(['login']);
  }

}
