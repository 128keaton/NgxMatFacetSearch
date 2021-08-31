import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {FACET_CONFIG, FacetConfig, FacetIdentifierStrategy} from 'ngx-mat-facet-search';
import packageData from '../../../ngx-mat-facet-search/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: FACET_CONFIG, useFactory: () => new FacetConfig({
          loggingCallback: (...args) => {
            console.log(...args);
          },
          identifierStrategy: FacetIdentifierStrategy.ParentID
        })
    }
  ]
})
export class AppComponent implements OnInit {

  showPageOne = true;
  showPageTwo = true;
  version = packageData.version;
  repo = packageData.repository;

  constructor(private router: Router) {
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
