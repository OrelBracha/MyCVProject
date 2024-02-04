import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AboutComponent } from './components/body/about/about.component';
import { EducationComponent } from './components/body/education/education.component';
import { ExperienceComponent } from './components/body/experience/experience.component';
import { ContactComponent } from './components/body/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormBuilder } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
