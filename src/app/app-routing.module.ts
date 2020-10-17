import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchPageContainerComponent } from './launch-page-container/launch-page-container.component';
import { RouteGuard } from './shared/route.guard';


const routes: Routes = [
  {path: '', component: LaunchPageContainerComponent, children: [
    {path: 'filter', component: LaunchPageContainerComponent, canActivate: [RouteGuard]}
  ]},
  {path: '**' , redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
