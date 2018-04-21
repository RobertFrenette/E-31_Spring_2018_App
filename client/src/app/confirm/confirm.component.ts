import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  emailAddress = '';
  error = false;
  errmsg = '';
  pwdreset = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.emailAddress  = params['email'];
    });
   }

   onSubmit(f:any): void {
    if (f.userName === '' || f.email === '' || f.password === '' || f.confirm === '') {
      this.errmsg = 'All fields are required.';
      this.error = true;
    } else {
      if (f.password !== f.confirm) {
        this.errmsg = 'Passwords must match!'
        this.error = true;
      } else {
        this.authService.confirm(f.userName, this.emailAddress, f.password)
        .subscribe(
          result => {
            // Handle result
            //console.log(result);
          },
          error => {
            //console.log(error);
            this.errmsg = 'Unsuccessful.';
            this.error = true;
          },
          () => {
            // 'onCompleted' callback.
            this.error = false;
            this.pwdreset = true;
          }
        );
      }
    }
  }

  onLogin(): void {
    this.router.navigate(['login']);
  }
}
