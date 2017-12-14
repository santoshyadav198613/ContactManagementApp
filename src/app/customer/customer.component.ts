import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'con-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      id: new FormControl('1', [Validators.required]),
      name: new FormControl('Shawn', [Validators.required]),
      email: new FormControl('test.test@sbc.com', [Validators.email, Validators.maxLength(15), Validators.minLength(6)]),
      mobile: new FormControl('9220586275', [Validators.required]),
      address: this.fb.group(
        {
          addressLine1: new FormControl('', [Validators.required]),
          addressLine2: new FormControl('', []),
          city: new FormControl('', [Validators.required]),
          pin: new FormControl('', [Validators.required]),
        }),
      cards: this.fb.array(
        [
            this.buildCard()
        ]
      )
    });
  }

  buildCard(): FormGroup {
    return this.fb.group({
      cardNumber: new FormControl('', [Validators.required]),
      expiryMonth: new FormControl('', [Validators.required]),
      expiryYear: new FormControl('', [Validators.required]),
      cvv: new FormControl('', [Validators.required])
    })
  }

  addCard() {
    let cards = this.customerForm.controls['cards'] as FormArray;
    cards.push( this.buildCard() );
  }

  removeCard(i: number) {
    let cards = this.customerForm.controls['cards'] as FormArray;
    cards.removeAt(i);
  }

  addCustomer() {
    console.log(this.customerForm.value);
    this.customerForm.reset();
  }

}
