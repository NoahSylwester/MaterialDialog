import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.scss']
})
export class EmailFieldComponent implements OnInit {
  @Output() newEmailType = new EventEmitter();
  @Output() addEmail = new EventEmitter();
  @Output() updateEmail = new EventEmitter();
  @Input() public emailType: string;
  @Input() public email: string;
  
  public emailOptions: string[] = ["Work", "Personal"];
  
  constructor() { }

  emailChange() {
    this.updateEmail.emit(this.email)
  }
  typeChange() {
    this.newEmailType.emit(this.emailType);
  }
  displayBothEmails() {
    this.addEmail.emit(true);
  }

  ngOnInit(): void {
  }

}
