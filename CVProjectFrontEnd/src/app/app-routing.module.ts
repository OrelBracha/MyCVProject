import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/body/about/about.component';
import { EducationComponent } from './components/body/education/education.component';
import { ExperienceComponent } from './components/body/experience/experience.component';
import { ContactComponent } from './components/body/contact/contact.component';

const routes: Routes = [
  {path: '', component: AboutComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
];

const routerModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [routerModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
