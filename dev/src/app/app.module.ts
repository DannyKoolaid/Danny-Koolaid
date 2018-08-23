import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { Part2Component } from './components/part2/part2.component';
import { OutletsComponent } from './components/outlets/outlets.component';
import { RecentPhotosComponent } from './components/recent-photos/recent-photos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'contact', component: ContactPagesComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    Part2Component,
    OutletsComponent,
    RecentPhotosComponent,
    FooterComponent,
    HomeComponent,
    AboutPageComponent,
    PortfolioPageComponent,
    TeamPageComponent,
    ContactPagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
