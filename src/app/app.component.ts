import { Component } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCli';


  constructor(public breakpointObserver: BreakpointObserver) {
    if (localStorage.getItem('films') === null) {
      localStorage.setItem('films', '[]');
    }
  }
}
