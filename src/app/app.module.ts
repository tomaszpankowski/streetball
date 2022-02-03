import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingsoonModule } from './comingsoon/comingsoon.module';
import { ContactModule } from './contact/contact.module';
import { CourtsModule } from './courts/courts.module';
import { ErrorModule } from './error/error.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayersModule } from './players/players.module';
import { PrivacyModule } from './privacy/privacy.module';
import { TournamentModule } from './tournament/tournament.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComingsoonModule,
    ContactModule,
    CourtsModule,
    HomeModule,
    PlayersModule,
    PrivacyModule,
    TournamentModule,
    UserModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
