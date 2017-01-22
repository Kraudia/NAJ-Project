import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmittedComponent } from './submitted.component';

@NgModule({
  imports:      [ CommonModule],
  declarations: [ SubmittedComponent ],
  exports:      [ SubmittedComponent,
                  CommonModule ]
})
export class SharedModule { }