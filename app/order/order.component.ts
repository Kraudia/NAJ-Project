import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { OrderService } from './order.service';
import { Order } from './order.model';
import { MovieFilm } from './../movieList/movie.model';

@Component({
    selector: 'myOrder',
    templateUrl: 'app/order/order.component.html',
    styleUrls: [ 'app/order/order.component.css' ]
})

export class OrderComponent implements OnInit {

	location: Location;

  public order: Array<MovieFilm> = [];

	submitted = false;

	onSubmit() { 
    this.submitted = true; 
    this.order = this.orderForm.value;
  }
  active = true;

  orderForm: FormGroup;

  constructor(location: Location, private fb: FormBuilder, private orderService: OrderService) {
    this.location = location;
    this.order = this.orderService.order;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.orderForm = this.fb.group({
      'name': [this.order.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(24)
        ]
      ],
      'surname': [this.order.surname, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(24)
        ]],
      'phone':    [this.order.phone, [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
          Validators.pattern("[0-9]{9,10}")
        ]]
    });

    this.orderForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.orderForm) { return; }
    const form = this.orderForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'surname': '',
    'phone': ''
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.'
    },
    'surname': {
      'required':      'Surname is required.',
      'minlength':     'Surname must be at least 4 characters long.',
      'maxlength':     'Surname cannot be more than 24 characters long.'
    },
    'phone': {
      'required':     'Phone is required.',
      'minlength':    'Phone must be at least 9 characters long.',
      'maxlength':    'Phone cannot be more than 10 characters long.',
      'pattern':      'Phone number is wrong.'
    }
  };

	back() {
    	this.location.back();
  	}
}
