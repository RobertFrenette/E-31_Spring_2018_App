import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  error = true;
  errmsg = "This is a test.";
  emailsent = true;

  constructor() { }

  ngOnInit() { }

  onSubmit(f:any): void {
    console.log('submit');
    /*
    email
    */
  }

}
