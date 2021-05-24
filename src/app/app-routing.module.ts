import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { WeeknewsDetailsComponent } from './pages/weeknews-details/weeknews-details.component';
import { WeeknewsComponent } from './pages/weeknews/weeknews.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'weeknews',
    component: WeeknewsComponent,
  },
  {
    path: 'news-details/:id',
    component: NewsDetailsComponent,
  },
  {
    path: 'weeknews-details/:id',
    component: WeeknewsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
