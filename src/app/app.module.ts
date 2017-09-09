// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

// root components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// services
import { Feathers } from './services/feathers.service';
import { AuthService } from './services/auth.service';
import { CoursesService } from './services/courses.service';
import { NewsService } from './services/news.service';
import { InfoService } from './services/info.service';
import { UploadService } from './services/upload.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    Feathers,
    AuthService,
    CoursesService,
    NewsService,
    InfoService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
