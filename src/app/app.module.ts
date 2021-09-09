import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular';


@NgModule({
  declarations: [
    AppComponent
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
