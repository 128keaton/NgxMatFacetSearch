import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {DemoService} from './demo.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showPageOne = true;
  showPageTwo = true;

  currentIdentifier: Observable<string>;

  constructor(private router: Router, private demoService: DemoService) {
    this.currentIdentifier = demoService.currentIdentifier.pipe(
      map(id => ` - ${id}`)
    );
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentURL = event.url;
        if (currentURL.includes('two')) {
          this.showPageTwo = false;
          this.showPageOne = true;
          console.log('Page Two');
        } else {
          this.showPageOne = false;
          this.showPageTwo = true;
          console.log('Page One');
        }
      }
    });
  }
}
