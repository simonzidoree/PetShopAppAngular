import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {OwnersListComponent} from './owners/owners-list/owners-list.component';
import {OwnerDetailsComponent} from './owners/owner-details/owner-details.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'owners', component: OwnersListComponent},
  {path: 'owner-add', component: OwnerAddComponent},
  {path: 'owner-update/:id', component: OwnerUpdateComponent},
  {path: 'owners/:id', component: OwnerDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
