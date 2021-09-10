import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { HomeComponent } from './home/home.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoleComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    IgxButtonModule,
    IgxRippleModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      easing: "ease-in",
      closeButton: true,
      progressAnimation: 'decreasing',
      preventDuplicates: true,
      positionClass: "toast-bottom-left"
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
