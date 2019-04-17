import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges{
  @Input()
  users: IUser[];
  @Input()
  usersLoading: boolean;

  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  @Output()
  onLoad: EventEmitter<number> = new EventEmitter();

  change: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes.usersLoading && changes.usersLoading.currentValue) {
      this.change = changes.usersLoading.currentValue;
    }
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }

  onLoadClick() {
    console.log("CLICK");
    this.onLoad.emit(1);
  }
}
