import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClientPlatformRoutingModule } from './client-platform-routing.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    ClientPlatformRoutingModule,
    MatTableModule
  ]
})
export class ClientPlatformModule { }
