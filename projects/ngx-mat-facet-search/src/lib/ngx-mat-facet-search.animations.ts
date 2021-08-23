import {animate, state, style, transition, trigger} from '@angular/animations';

export const chipAnimation = [
  trigger('chipAnimation', [
    state('in', style({
        transform: 'translateX(0)',
        opacity: 0
      })
    ),
    transition('void => *', [
      style({
        transform: 'translateX(-100%)',
        opacity: 1
      }),
      animate(150)
    ]),
    transition('* => void', [
      animate(150, style({
        transform: 'translateX(-100%)',
        opacity: 0
      }))
    ])
  ])
]
