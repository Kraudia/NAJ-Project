import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SubmittedComponent } from './submitted.component';
import { OrderComponent } from './order.component';

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule ],
  declarations: [ SubmittedComponent, OrderComponent ],
  exports:      [ SubmittedComponent, OrderComponent ]
})
export class OrderModule { }