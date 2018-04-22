import { Component, OnInit } from '@angular/core';

import { AuthService } from './../providers/auth/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  error = false;
  errmsg = '';
  emailsent = false;

  constructor(private authService: AuthService) {}

  ngOnInit() { }

  onSubmit(f:any): void {
    if (f.email === '') {
      this.errmsg = 'Email is required.';
      this.error = true;
    } else {
      this.authService.reset(f.email)
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
          this.emailsent = true;
        }
      );
    }
  }

}
