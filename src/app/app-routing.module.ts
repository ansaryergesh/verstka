import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import{ UserComponent } from './components/user/user.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: '', component:UserComponent},
  { path: '', component:ObjectsComponent},
  { path: '', component:FeedbackComponent},
  { path: '', component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
