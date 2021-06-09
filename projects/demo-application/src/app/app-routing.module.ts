import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageOneComponent} from './pages/page-one/page-one.component';
import {PageTwoComponent} from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent
  },
  {
    path: 'two',
    component: PageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
