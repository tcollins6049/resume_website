import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience-comp/experience-comp.component';
import { EducationComponent } from './education-comp/education-comp.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HeaderComponent } from './header/header.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { FormsModule } from '@angular/forms';
import { UpdateProjectComponent } from './update-project/update-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    HeaderComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    // HttpClientModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
