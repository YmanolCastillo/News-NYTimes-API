import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { WeeknewsDetailsComponent } from './pages/weeknews-details/weeknews-details.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { WeeknewsComponent } from './pages/weeknews/weeknews.component';
// import { NewsFilterPipe } from './_pipes/news-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewsDetailsComponent,
    WeeknewsDetailsComponent,
    NavbarComponent,
    WeeknewsComponent,
    // NewsFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
