import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { SizerComponent } from './sizer/sizer.component';
import { DemoComponent } from './comps/demo/demo.component';
import { NavComponent } from './nav/nav.component';
import { CompParentComponent } from './comps/comp-parent/comp-parent.component';
import { CompChildComponent } from './comps/comp-child/comp-child.component';
import { CardComponent } from './comps/card/card.component';
import { LearnPipeComponent } from './comps/learn-pipe/learn-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    SizerComponent,
    DemoComponent,
    NavComponent,
    CompParentComponent,
    CompChildComponent,
    CardComponent,
    LearnPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
