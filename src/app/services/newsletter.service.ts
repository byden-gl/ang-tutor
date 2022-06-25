import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor() { }

  public subscribe(value: any): void {
    console.log(value)
  }

}
