import { Component, OnInit } from '@angular/core';
import {NewsletterService} from "../services/newsletter.service";
import {User} from "../model/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: User = {
    firstName: 'Alice',
    lastName: 'Smith'
  };

  constructor(
    private newsletterService: NewsletterService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.loadUser(this.user);
  }

  public subscribe(email:string) {
    this.newsletterService.subscribe(email);
  }

  public changeUserName() {
/*    this.user = {
      firstName: 'Bob',
      lastName: 'Smith'
    }*/

    this.userService.loadUser({firstName: 'Bob', lastName: 'Smith' });
  }

}
