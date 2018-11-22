import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {OwnersListComponent} from './owners/owners-list/owners-list.component';
import {OwnerDetailsComponent} from './owners/owner-details/owner-details.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'owners', component: OwnersListComponent, canActivate: [AuthGuard]},
  {path: 'owner-add', component: OwnerAddComponent, canActivate: [AuthGuard]},
  {path: 'owner-update/:id', component: OwnerUpdateComponent, canActivate: [AuthGuard]},
  {path: 'owners/:id', component: OwnerDetailsComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
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
