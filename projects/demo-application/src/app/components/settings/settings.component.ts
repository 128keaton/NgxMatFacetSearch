import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {Facet, FacetDataType, FacetIdentifierStrategy} from 'ngx-mat-facet-search';
import {BehaviorSubject, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {lotsOfValuesTypeAhead, testEmptyFilterTypeahead} from '../../common.helpers';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements AfterViewInit {

  @Output()
  strategyUpdated = new EventEmitter<FacetIdentifierStrategy>(true);

  @Output()
  manualIdentifierUpdated = new EventEmitter<string>(true);

  @Output()
  facetsUpdated = new EventEmitter<Facet[]>(true);

  @Input()
  set strategy(value: any) {
    this.currentStrategy = value;
  }

  @Input()
  currentIdentifier: string | null = '';

  // Settings
  public chipLabelsEnabled = true;
  public clearButtonEnabled = true;
  public confirmOnRemove = true;
  public isUsingSetB = true;

  public allStrategies: string[] = [];
  public currentStrategy: FacetIdentifierStrategy;
  public showManualInput = new BehaviorSubject(false);
  public manualIdentifier = '';
  public facets: Array<Facet> = [];

  private allFacets = [
    {
      name: 'userName',
      labelText: 'User Name',
      type: FacetDataType.Text,
      description: 'Please enter your user name (simple text input example)',
      icon: 'person_outline'
    }, {
      name: 'birthday',
      labelText: 'Birthday',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: FacetDataType.Date,
    },
    {
      name: 'eventDays',
      labelText: 'Event Days',
      icon: 'event_available',
      description: 'Please select start and end dates (date range select example)',
      type: FacetDataType.DateRange,
    },
    {
      name: 'isParticipant',
      labelText: 'Is a Participant?',
      icon: 'live_help',
      description: 'This is a test field, you can test boolean data type.',
      type: FacetDataType.Boolean,
    },
    {
      name: 'state',
      labelText: 'State',
      description: 'Please select something (single select, http example)',
      type: FacetDataType.CategorySingle,
      icon: 'folder_open',
      /* mock http service call  */
      options: of([
        {value: 'open', text: 'Open', count: 49},
        {value: 'closed', text: 'Closed', count: 23}
      ]).pipe(delay(700))
    },
    {
      name: 'license',
      labelText: 'License(s)',
      description: 'Please select your licenses (multi select, http example)',
      type: FacetDataType.Category,
      icon: 'drive_eta',
      /* mock http service call  */
      options: of([
        {value: 'a', text: 'Class A'},
        {value: 'b', text: 'Class B'},
        {value: 'c', text: 'Class C'}
      ]).pipe(delay(1200))
    },
    {
      name: 'city',
      labelText: 'Cities',
      description: 'Please select from cities.',
      type: FacetDataType.Typeahead,
      icon: 'location_city',
      typeahead: {
        function: (txt: string | null) => of([
            {value: txt + '-a', text: txt + ' A'},
            {value: txt + '-b', text: txt + ' B'},
            {value: txt + '-c', text: txt + ' C'}
          ]).pipe(delay(1200)),
      }
    },
    {
      name: 'birthday',
      labelText: 'Birthday 2',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: FacetDataType.Date,
    },
    {
      name: 'empty',
      labelText: 'Empty Test',
      description: 'Please select from options.',
      type: FacetDataType.Typeahead,
      icon: 'clear',
      typeahead: {
        function: testEmptyFilterTypeahead,
        placeholder: 'Empty'
      }
    },
    {
      name: 'many',
      labelText: 'Many Test',
      description: 'Please select from options.',
      type: FacetDataType.Typeahead,
      icon: 'dns',
      typeahead: {
        function: lotsOfValuesTypeAhead,
        placeholder: '1'
      }
    },
  ];

  constructor() {
    this.allStrategies = Object.keys(FacetIdentifierStrategy);
    this.strategyUpdated.pipe(
      map(v => v.toLowerCase() === 'manual')
    ).subscribe(this.showManualInput);
  }

  ngAfterViewInit() {
    this.toggleSet();
  }

  chunkArray = (arr: Array<any>, n: number) => {
    const chunkLength = Math.max(arr.length/n ,1);
    const chunks = [];
    for (let i = 0; i < n; i++) {
      if(chunkLength*(i+1)<=arr.length){chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));}
    }
    return chunks;
  };

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

  toggleSet() {
    const chunked = this.chunkArray(this.allFacets, 2);

    if (this.isUsingSetB) {
      this.facets = chunked[0];
      this.isUsingSetB = false;
    } else {
      this.facets = chunked[1];
      this.isUsingSetB = true;
    }

    this.facetsUpdated.emit(this.facets);
  }
}
