import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../model/user";
import {Observable} from "rxjs";
import {NewsletterService} from "../services/newsletter.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent implements OnInit {
/*  @Input()
  user: User | null | undefined;
  @Input()
  user$: Observable<User> | undefined;*/

/*  @Output()
  subscribe = new EventEmitter();*/

/*  public firstName?: string;*/

  constructor(
    private newsletterService: NewsletterService,
    public userService: UserService) {

  }

  ngOnInit(): void {
/*    this.userService.user$.subscribe(
      user => this.firstName = user.firstName
    );*/
  }

  public subscribeToNewsletter(email:string) {
/*    this.subscribe.emit(email);*/
    this.newsletterService.subscribe(email);
  }
}
