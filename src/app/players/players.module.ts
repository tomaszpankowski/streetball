import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players/players.component';
import { PlayersS1Component } from './players-s1/players-s1.component';
import { PlayersS2Component } from './players-s2/players-s2.component';


@NgModule({
  declarations: [
    PlayersComponent,
    PlayersS1Component,
    PlayersS2Component
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
