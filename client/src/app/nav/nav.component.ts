import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { NavService } from '../providers/nav/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  subscription: Subscription;

  authd = false;

  constructor(
    private navService: NavService,
    private router: Router) {
      this.subscription = this.navService.getMessage().subscribe(message => { 
        this.authd = message.authd; 
      });
    }

  ngOnInit() {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onLogin(): void {
    this.router.navigate(['login']);
  }

  onRegister(): void {
    this.router.navigate(['register']);
  }

  onLogout(): void {
    this.navService.sendMessage(false);
    this.router.navigate(['']);
  }
}
