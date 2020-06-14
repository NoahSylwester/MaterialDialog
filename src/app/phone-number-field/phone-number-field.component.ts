import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phone-number-field',
  templateUrl: './phone-number-field.component.html',
  styleUrls: ['./phone-number-field.component.scss']
})
export class PhoneNumberFieldComponent implements OnInit {
  @Output() newPhoneNumberType = new EventEmitter();
  @Output() addPhoneNumber = new EventEmitter();
  @Output() updatePhoneNumber = new EventEmitter();
  @Input() public phoneNumberType: string;
  @Input() public phoneNumber: string;

  public phoneNumberOptions: string[] = ["Work", "Mobile"];
  
  constructor() { }

  phoneNumberChange() {
    this.updatePhoneNumber.emit(this.phoneNumber)
  }
  typeChange() {
    this.newPhoneNumberType.emit(this.phoneNumberType);
  }
  displayBothPhoneNumbers() {
    this.addPhoneNumber.emit(true);
  }

  ngOnInit(): void {
  }

}