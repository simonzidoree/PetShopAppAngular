import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {OwnersListComponent} from './owners/owners-list/owners-list.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';
import {OwnerDetailsComponent} from './owners/owner-details/owner-details.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonsModule, ProgressbarModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OwnersListComponent,
    NavbarComponent,
    WelcomeComponent,
    OwnerDetailsComponent,
    OwnerAddComponent,
    OwnerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
