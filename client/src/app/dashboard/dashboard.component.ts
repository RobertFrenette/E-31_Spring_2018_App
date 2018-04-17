import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { 
    this.userName = this.route.snapshot.paramMap.get('userName');
  }

  onSubmit(): void {
    // TBD
  }

}
