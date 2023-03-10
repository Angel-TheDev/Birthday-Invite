import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router' ;
import { InviteInfoComponent } from './invite-info/invite-info.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { VideoIntroComponent } from './video-intro/video-intro.component';

const routes: Routes = [
  { path: 'video-intro', component: VideoIntroComponent},
  { path: 'invite-info', component: InviteInfoComponent},
  { path: 'rsvp-form', component: RsvpFormComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
