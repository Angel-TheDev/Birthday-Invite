import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InviteInfoComponent } from './invite-info/invite-info.component';
import { VideoIntroComponent } from './video-intro/video-intro.component';
import { AppRoutingModule } from './app-routing.module';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InviteInfoComponent,
    VideoIntroComponent,
    RsvpFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
