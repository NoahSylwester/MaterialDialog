import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeDetails } from '../mock';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() public employeeData: EmployeeDetails;
  
  // this property is separate because it is not included in mock.ts
  @Input() public preferredName: string;
  // property enables switching of SSN visibility
  @Input() public hideSSN: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeDetails
    ) {
      this.employeeData = data;
      
      this.addresses = [
          { value: this.employeeData.streetAddress,
            type: "Street" },
          { value: this.employeeData.mailingAddress,
            type: "Mailing" }
        ]

      this.emails = [
        { value: this.employeeData.workEmail,
          type: "Work" },
        { value: this.employeeData.personalEmail,
          type: "Personal" }
      ]

      this.phoneNumbers = [
        { value: this.employeeData.mobilePhone,
          type: "Mobile" },
        { value: this.employeeData.workPhone,
          type: "Work" }
      ]
    }

  // this function knits all the data together and sends it out
  save() {
    let savedData: EmployeeDetails = this.employeeData;
    for (let i = 0; i < this.addresses.length; i++) {
      if (this.addresses[i].type === "Street") {
        savedData.streetAddress = this.addresses[i].value;
      }
      else {
        savedData.mailingAddress = this.addresses[i].value;
      }
    }
    for (let i = 0; i < this.emails.length; i++) {
      if (this.emails[i].type === "Personal") {
        savedData.personalEmail = this.emails[i].value;
      }
      else {
        savedData.workEmail = this.emails[i].value;
      }
    }
    for (let i = 0; i < this.phoneNumbers.length; i++) {
      if (this.phoneNumbers[i].type === "Mobile") {
        savedData.mobilePhone = this.phoneNumbers[i].value;
      }
      else {
        savedData.workPhone = this.phoneNumbers[i].value;
      }
    }
      this.dialogRef.close(savedData);
    }
  ngOnInit(): void {
    }
  
  // -------
  // Below lives all the logic for the adding of fields and type switching
  // I've separated it so that the essential elements for everything else
  // remain uncluttered

  // These arrays hold references to addresses, emails, and phoneNumbers
  // They are held in this way to keep them somewhat 'type'-agnostic
  @Input() public addresses: IAddress[];
  @Input() public emails: IEmail[];
  @Input() public phoneNumbers: IPhoneNumber[];

  // The add buttons flip simple switches that enable the display of both types
  public isDisplayBothAddresses: boolean = false;
  public isDisplayBothEmails: boolean = false;
  public isDisplayBothPhoneNumbers: boolean = false;

  // These functions handle type changes, and ensure only one of each type
  // can be present. In the case of a field selecting a field already present
  // (ie two work emails), the other type field will be toggled
  updateAddressType(type, index) {
    this.addresses[index].type = type;
    if (index === 0 ) {
      if (type === "Street") {
        this.addresses[1].type = "Mailing";
      }
      else {
        this.addresses[1].type = "Street";
      }
    }
    else {
      if (type === "Street") {
        this.addresses[0].type = "Mailing";
      }
      else {
        this.addresses[0].type = "Street";
      }
    }
  }
  updateEmail(newEmail, index) {
    this.emails[index].value = newEmail;
  }
  updateEmailType(type, index) {
    this.emails[index].type = type;
    if (index === 0 ) {
      if (type === "Work") {
        this.emails[1].type = "Personal";
      }
      else {
        this.emails[1].type = "Work";
      }
    }
    else {
      if (type === "Personal") {
        this.emails[0].type = "Work";
      }
      else {
        this.emails[0].type = "Personal";
      }
    }
  }
  updatePhoneNumber(newPhoneNumber, index) {
    this.phoneNumbers[index].value = newPhoneNumber;
  }
  updatePhoneNumberType(type, index) {
    this.phoneNumbers[index].type = type;
    if (index === 0 ) {
      if (type === "Work") {
        this.phoneNumbers[1].type = "Mobile";
      }
      else {
        this.phoneNumbers[1].type = "Work";
      }
    }
    else {
      if (type === "Mobile") {
        this.phoneNumbers[0].type = "Work";
      }
      else {
        this.phoneNumbers[0].type = "Mobile";
      }
    }
  }

}

interface IAddress {
  value: {
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    zip: string,
  }
  type: string
}
interface IEmail {
  value: string,
  type: string
}
interface IPhoneNumber {
  value: string,
  type: string
}