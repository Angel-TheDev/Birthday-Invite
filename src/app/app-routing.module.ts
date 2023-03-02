import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router' ;
import { InviteInfoComponent } from './invite-info/invite-info.component';
import { VideoIntroComponent } from './video-intro/video-intro.component';

const routes: Routes = [
  { path: 'invite-info', component: InviteInfoComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
