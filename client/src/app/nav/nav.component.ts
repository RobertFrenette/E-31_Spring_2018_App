import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin(): void {
    this.router.navigate(['login']);
  }

  onRegister(): void {
    this.router.navigate(['register']);
  }

  onLogout(): void {
    this.router.navigate(['']);
  }
}
