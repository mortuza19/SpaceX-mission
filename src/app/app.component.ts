import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spaceX-project';

  constructor( @Inject(PLATFORM_ID) private platformId) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log(isPlatformBrowser(this.platformId));
      console.log('the app load from client side');
    } else {
      console.log('the app load from server side');
    }
  }
}
