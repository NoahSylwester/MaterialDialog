import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { EMPLOYEEDETAILS_MOCK, EmployeeDetails } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'truppExercise';

  public savedEmployeeData: EmployeeDetails = EMPLOYEEDETAILS_MOCK;

  constructor(public dialog: MatDialog) {
  }

  // opens the dialog box
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '70%',
      data: JSON.parse(JSON.stringify(this.savedEmployeeData)), //copy the data
      panelClass: 'myapp-no-padding-dialog',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.savedEmployeeData = result;
        console.log(result)
      }
    });
  }
}
