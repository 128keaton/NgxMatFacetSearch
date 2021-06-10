import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FacetIdentifierStrategy} from 'ngx-mat-facet-search';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // Settings
  public chipLabelsEnabled = true;
  public clearButtonEnabled = true;
  public confirmOnRemove = true;

  @Output()
  strategyUpdated = new EventEmitter<FacetIdentifierStrategy>(true);

  @Output()
  manualIdentifierUpdated = new EventEmitter<string>(true);

  @Input()
  set strategy(value: any) {
    this.currentStrategy = value;
  }

  @Input()
  currentIdentifier = '';

  public allStrategies = [];
  public currentStrategy: FacetIdentifierStrategy;
  public showManualInput = new BehaviorSubject(false);
  public manualIdentifier = '';

  constructor() {
    this.allStrategies = Object.keys(FacetIdentifierStrategy);
    this.strategyUpdated.pipe(
      map(v => v.toLowerCase() === 'manual')
    ).subscribe(this.showManualInput);
  }

  ngOnInit(): void {
  }


  getRawStrategy(strategy: FacetIdentifierStrategy) {
    return FacetIdentifierStrategy[strategy];
  }

  displayStrategy(raw: string): string {
    switch (raw) {
      case 'WindowURL':
        return 'Window URL';
      case 'ParentID':
        return 'Parent ID';
      default:
        return raw;
    }
  }
}
