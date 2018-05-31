import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-overview-add-funds-dialog',
  templateUrl: './dialog-overview-add-funds-dialog.component.html',
  styleUrls: ['./dialog-overview-add-funds-dialog.component.css']
})
export class DialogOverviewAddFundsDialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewAddFundsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
