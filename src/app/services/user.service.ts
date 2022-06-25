import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {BehaviorSubject, Observable} from "rxjs";

const ANONYMOUS_USER: User = {
  firstName: '',
  lastName: ''
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  public user$: Observable<User> = this.subject.asObservable();

  constructor() { }

  public loadUser(user:User) {
    this.subject.next(user);
  }
}
