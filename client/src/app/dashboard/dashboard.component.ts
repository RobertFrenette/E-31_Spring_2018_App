import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { ListService } from './../providers/list/list.service';
import { ItemService } from './../providers/item/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName = '';
  user_id = '';
  warning = false;
  warningmsg = '';
  lists: any = null;
  list_id = '';
  items: any = null;
  showItemsDiv = false;

  constructor(
    private listService: ListService, 
    private itemService: ItemService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.userName = params['userName'];
      this.user_id = params['user_id'];

     this.listService.getLists(this.user_id)
     .subscribe(
       result => {
         // Handle result
         //console.log(result);
         this.lists = result;
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

  onSubmitList(f:any): void {
    if (f.listName === '') {
      this.warningmsg = 'List Name is required.';
      this.warning = true;
    } else {
      this.listService.create(this.user_id, f.listName)
      .subscribe(
        result => {
          // Handle result
          console.log(result);
          this.lists.push(result);
        },
        error => {
          //console.log(error);
          this.warningmsg = 'List creation unsuccessful. List already exists.';
          this.warning = true;
        },
        () => {
          // 'onCompleted' callback.
          this.warning = false;
        }
      );
    }
  }

  onEditList(list_id) {
    this.list_id = list_id;
    this.showItemsDiv = false;

    this.itemService.getItems(list_id)
    .subscribe(
      result => {
        // Handle result
        //console.log(result);
        this.items = result;
        this.showItemsDiv = true;
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

  onDeleteList(id) {
    this.listService.delete(id)
    .subscribe(
      result => {
        // Handle result
        //console.log(result);

        let allLists = this.lists;
        var filteredLists = allLists.filter((list) => list._id !== result._id);
    
        this.lists = filteredLists;
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

  onSubmitItem(f:any): void {
    if (f.itemName === '') {
      this.warningmsg = 'Item Name is required.';
      this.warning = true;
    } else {
      this.itemService.create(this.list_id, f.itemName, f.description)
      .subscribe(
        result => {
          // Handle result
          //console.log(result);
          this.items.push(result);
        },
        error => {
          //console.log(error);
          this.warningmsg = 'Item creation unsuccessful. Item already exists in list.';
          this.warning = true;
        },
        () => {
          // 'onCompleted' callback.
          this.warning = false;
        }
      );
    }
  }

  onEditItem(id) {
    this.router.navigate(['edit', {userName: this.userName, user_id: this.user_id, list_id: this.list_id, item_id: id}]);
  }

  onDeleteItem(id) {
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
