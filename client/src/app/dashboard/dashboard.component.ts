import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { ItemService } from './../providers/item/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName = '';
  warning = false;
  warningmsg = '';
  _id = '';
  items: any = null;

  constructor(
    private itemService: ItemService, 
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.userName = params['userName'];
      this._id = params['_id'];

      this.itemService.getItems(this._id)
      .subscribe(
        result => {
          // Handle result
          //console.log(result);
          this.items = result;
        },
        error => {
          //console.log(error);
        },
        () => {
          // 'onCompleted' callback.
          this.warning = false;
        }
      );
    });
  }

  onSubmit(f:any): void {
    if (f.itemName === '') {
      this.warningmsg = 'Item Name is required.';
      this.warning = true;
    } else {
      this.itemService.create(this._id, f.itemName, f.description)
      .subscribe(
        result => {
          // Handle result
          //console.log(result);
          this.items.push(result);
        },
        error => {
          //console.log(error);
          this.warningmsg = 'Item creation unsuccessful. Item alreasy exists in list.';
          this.warning = true;
        },
        () => {
          // 'onCompleted' callback.
          this.warning = false;
        }
      );
    }
  }

  delete(id) {
    this.itemService.delete(id)
    .subscribe(
      result => {
        // Handle result
        //console.log(result);

        let allItems = this.items;
        var filteredItems = allItems.filter((item) => item._id !== result._id);
    
        this.items = filteredItems;
      },
      error => {
        //console.log(error);
      },
      () => {
        // 'onCompleted' callback.
        this.warning = false;
      }
    );
  }

}
