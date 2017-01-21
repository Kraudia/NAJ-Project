import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'myOrder',
    templateUrl: 'app/order/order.component.html',
    styleUrls: [ 'app/order/order.component.css' ]
})

export class OrderComponent {

	location: Location;

	constructor(location: Location) {
		this.location = location;
	}

    public meassage2:string = 'Hallo!';

    model = {};

	submitted = false;
	onSubmit() { this.submitted = true; }

	back() {
    	this.location.back();
  	}
  go() {
      if (this.model.phone.search(/[0-9]{9,10}/) != -1 && this.model.phone.length < 11) {
          alert("Good number!")
      } else {
          alert("Bad number!")
      }
  }
}
