import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OwnersListComponent} from './owners/owners-list/owners-list.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';
import {OwnerDetailsComponent} from './owners/owner-details/owner-details.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonsModule, ProgressbarModule} from 'ngx-bootstrap';
import {LoginComponent} from './login/login.component';
import {OwnerService} from './shared/services/owner.service';
import {AuthenticationService} from './shared/services/authentication.service';
import {AuthGuard} from './shared/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    OwnersListComponent,
    NavbarComponent,
    WelcomeComponent,
    OwnerDetailsComponent,
    OwnerAddComponent,
    OwnerUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    OwnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
