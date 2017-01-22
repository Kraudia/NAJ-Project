import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Order } from './order.model';

@Component({
  selector: 'order-submitted',
  template: `
  <div *ngIf="submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ order.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Surname</div>
      <div class="col-xs-9 pull-left">{{ order.surname }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Phone</div>
      <div class="col-xs-9 pull-left">{{ order.phone }}</div>
    </div>
    <br>
    <button class="btn btn-default" (click)="onClick()">Edit</button>
  </div>`
})

export class SubmittedComponent {
  @Input()  order: Order;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  onClick() { this.submittedChange.emit(false); }
}