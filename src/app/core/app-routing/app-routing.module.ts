import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CompleteComponent } from '../pages/complete/complete.component'
import { CreateComponent } from '../pages/create/create.component'
import { HomeComponent } from '../pages/home/home.component'

const routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'complete', component: CompleteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
