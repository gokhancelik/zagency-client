import { HomeModule } from './home/home.module';
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
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
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
    HomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
