import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';
import { TaskAddComponent } from './tasks/task-add/task-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SigninComponent,
    SignupComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    TasksComponent,
    TaskDetailComponent,
    HeaderComponent,
    ProjectAddComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
