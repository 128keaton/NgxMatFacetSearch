import {ConnectedOverlayPositionChange, FlexibleConnectedPositionStrategy, OverlayRef} from '@angular/cdk/overlay';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {FacetModalConfig} from './facet-modal.config';
import {FacetResult, FacetResultType} from '../models';


export class FacetModalRef {
  private afterClosedSubject = new Subject<FacetResult>();
  private beforeClosedSubject = new Subject<FacetResult>();

  private _result: FacetResult = {type: FacetResultType.CANCEL};

  constructor(private overlayRef: OverlayRef,
              private positionStrategy: FlexibleConnectedPositionStrategy,
              public config: FacetModalConfig) {
    if (!config.disableClose) {
      this.overlayRef.backdropClick().subscribe(() => {
        this.close(this._result);
      });

      this.overlayRef.detachments().subscribe(() => {
        this.beforeClosedSubject.next(this._result);
        this.beforeClosedSubject.complete();
      });

      this.overlayRef.keydownEvents().pipe(
        filter(event => event.key === 'Escape')
      ).subscribe(() => {
        this.close();
      });
    }
  }

  close(dialogResult?: FacetResult): void {
    if (!!dialogResult) {
      this._result = dialogResult;
    }

    this.beforeClosedSubject.next(this._result);
    this.beforeClosedSubject.complete();

    this.afterClosedSubject.next(this._result);
    this.afterClosedSubject.complete();

    this.overlayRef.dispose();
  }

  afterClosed(): Observable<FacetResult> {
    return this.afterClosedSubject.asObservable();
  }

  beforeClosed(): Observable<FacetResult> {
    return this.beforeClosedSubject.asObservable();
  }

  positionChanges(): Observable<ConnectedOverlayPositionChange> {
    return this.positionStrategy.positionChanges;
  }
}
