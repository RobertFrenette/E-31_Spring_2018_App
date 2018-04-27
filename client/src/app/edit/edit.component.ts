import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ItemService } from './../providers/item/item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userName = '';
  user_id = '';
  warning = false;
  warningmsg = '';
  item_id = '';

  itemName = '';
  itemNameText = '';
  description = ''
  descriptionText = '';

  constructor(
    private itemService: ItemService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userName = params['userName'];
      this.user_id = params['user_id'];
      this.item_id = params['item_id'];

      this.itemService.getItem(this.item_id)
      .subscribe(
        result => {
          // Handle result
          //console.log(result);
          this.itemName = result[0].name;
          this.itemNameText = result[0].name;
          this.description = result[0].desc;
          this.descriptionText = result[0].desc;
        },
        error => {
          //console.log(error);
          this.warningmsg = 'Item GET unsuccessful.';
          this.warning = true;
        },
        () => {
          // 'onCompleted' callback.
        }
      );

    });
  }

  onSubmit(f:any): void {
    if (f.itemName === '') {
      this.warningmsg = 'Item Name is required.';
      this.warning = true;
    } else {
      this.itemService.update(this.user_id, this.item_id, f.itemName, f.description)
      .subscribe(
        result => {
          // Handle result
          //console.log(result);
        },
        error => {
          //console.log(error);
          this.warningmsg = 'Item creation unsuccessful. Item alreasy exists in list.';
          this.warning = true;
        },
        () => {
          // 'onCompleted' callback.
          this.router.navigate(['dashboard', {userName: this.userName, user_id: this.user_id}]);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['dashboard', {userName: this.userName, user_id: this.user_id}]);
  }

}
