import {animate, state, style, transition, trigger} from '@angular/animations';

export const chipAnimation = [
  trigger('chipAnimation', [
    state('in', style({
        transform: 'translateX(0)',
        opacity: 0,
        position: 'absolute'
      })
    ),
    transition('void => *', [
      style({
        transform: 'translateX(-100%)',
        opacity: 1,
        position: '*'
      }),
      animate('200ms ease-out')
    ]),
    transition('* => void', [
      style({
        position: 'absolute'
      }),
      animate('200ms ease-in', style({
        transform: 'translateX(-100%)',
        opacity: 0
      }))
    ])
  ])
]
