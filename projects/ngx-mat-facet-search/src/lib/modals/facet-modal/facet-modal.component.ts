import {Component, ComponentRef, ViewChild, EventEmitter, HostBinding, HostListener, EmbeddedViewRef} from '@angular/core';
import {BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal} from '@angular/cdk/portal';
import {AnimationEvent} from '@angular/animations';
import {facetModalAnimations} from './facet-modal.animations';

interface FacetModalAnimationEvent {
  state: 'opened' | 'opening' | 'closing' | 'closed';
  totalTime: number;
}

@Component({
  selector: 'ngx-facet-modal',
  templateUrl: './facet-modal.component.html',
  styleUrls: ['./facet-modal.component.scss'],
  animations: [facetModalAnimations.modalContainer],
})
export class FacetModalComponent extends BasePortalOutlet {
  @ViewChild(CdkPortalOutlet, {static: true}) portalOutlet: CdkPortalOutlet;
  @HostBinding('class') hostClass = 'facet-modal-component';


  state: 'void' | 'enter' | 'exit' = 'enter';
  animationStateChanged = new EventEmitter<FacetModalAnimationEvent>();

  @HostBinding('@modalContainer') get animationState(): string {
    return this.state;
  }

  @HostListener('@modalContainer.done', ['$event']) _onAnimationDone({toState, totalTime}: AnimationEvent) {
    if (toState === 'enter') {
      this.animationStateChanged.next({state: 'opened', totalTime});
    } else if (toState === 'exit') {
      this.animationStateChanged.next({state: 'closed', totalTime});
    }
  }

  @HostListener('@modalContainer.start', ['$event']) _onAnimationStart({toState, totalTime}: AnimationEvent) {
    if (toState === 'enter') {
      this.animationStateChanged.next({state: 'opening', totalTime});
    } else if (toState === 'exit' || toState === 'void') {
      this.animationStateChanged.next({state: 'closing', totalTime});
    }
  }

  attachComponentPortal<T>(componentPortal: ComponentPortal<any>): ComponentRef<T> {
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    throw new Error('Method not implemented.');
  }

  _startExitAnimation(): void {
    this.state = 'exit';
  }
}
