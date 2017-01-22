import { OrderFormComponent }           from './orderForm.component';
import { OrderModule } from './order.module';

@NgModule({
  imports: [
    OrderModule
  ],
  declarations: [ OrderFormComponent ],
  bootstrap:    [ OrderFormComponent ]
})
export class OrderFormModule { }

