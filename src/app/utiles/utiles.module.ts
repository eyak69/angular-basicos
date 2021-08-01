import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContadorComponent
  ],
  exports:[
    ContadorComponent
  ]
})

export class UtilesModule { }
