import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';
import { OrderComponent } from './order.component';

@NgModule({
  imports:      [ SharedModule, ReactiveFormsModule ],
  declarations: [ OrderComponent ],
  exports:      [ OrderComponent ]
})
export class OrderModule { }