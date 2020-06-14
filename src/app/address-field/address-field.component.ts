import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address-field',
  templateUrl: './address-field.component.html',
  styleUrls: ['./address-field.component.scss']
})
export class AddressFieldComponent implements OnInit {
  @Output() newAddressType = new EventEmitter();
  @Output() addAddress = new EventEmitter();
  @Input() public addressType: string;
  @Input() public addressData: {
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    zip: string,
  }
  public addressOptions: string[] = ["Street", "Mailing"];

  constructor() { }

  typeChange() {
    this.newAddressType.emit(this.addressType);
  }
  displayBothAddresses() {
    this.addAddress.emit(true);
  }

  ngOnInit(): void {
  }

}
