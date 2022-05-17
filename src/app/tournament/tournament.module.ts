import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentS1Component } from './tournament-s1/tournament-s1.component';
import { TournamentS2Component } from './tournament-s2/tournament-s2.component';


@NgModule({
  declarations: [
    TournamentComponent,
    TournamentS1Component,
    TournamentS2Component
  ],
  imports: [
    CommonModule,
    TournamentRoutingModule
  ]
})
export class TournamentModule { }
