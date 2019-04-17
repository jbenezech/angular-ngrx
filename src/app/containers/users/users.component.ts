import { GetUsers } from './../../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectUserList, isUsersLoading } from '../../store/selectors/user.selector';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //users$ = this._store.pipe(select(selectUserList));
  usersLoading$ : Observable<boolean>

  constructor(private _store: Store<IAppState>, private _router: Router) {
    this.usersLoading$ = this._store.pipe(select(isUsersLoading));
  }

  ngOnInit() {
//    this._store.dispatch(new GetUsers());
  }

  onLoad() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
