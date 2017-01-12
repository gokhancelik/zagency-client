import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ThemeModule } from './theme';
import { TourModule } from './tour/tour.module';
import { TourTypeModule } from './tourType/tourType.module';
import { SharedModule } from './shared';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';




const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyByQM2VHGOKLJdCF5fM9FJLE4NZMatHQGQ',
  authDomain: 'zagency-9f4fe.firebaseapp.com',
  databaseURL: 'https://zagency-9f4fe.firebaseio.com',
  storageBucket: 'zagency-9f4fe.appspot.com',
  messagingSenderId: '318138626852'
};


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ThemeModule,
    TourModule,
    TourTypeModule,
    SharedModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG, myFirebaseAuthConfig),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
