import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GettingStartComponent } from './getting-start/getting-start.component';
import { LinkShortenerComponent } from './link-shortener/link-shortener.component';
import { AdvancedStatisticsComponent } from './advanced-statistics/advanced-statistics.component';
import { BoostYourLinksComponent } from './boost-your-links/boost-your-links.component';
import { FooterComponent } from './footer/footer.component';
import { JsonParsePipe } from './json-parse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GettingStartComponent,
    LinkShortenerComponent,
    AdvancedStatisticsComponent,
    BoostYourLinksComponent,
    FooterComponent,
    JsonParsePipe,
  ],
  imports: [HttpClientModule, BrowserModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
