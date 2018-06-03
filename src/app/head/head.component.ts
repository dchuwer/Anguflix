import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewAddFundsDialogComponent } from '../dialog-overview-add-funds-dialog/dialog-overview-add-funds-dialog.component';
import { UserComponent } from "../user/user.component"
import { User } from '../User';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
   
  
  constructor(private moviesService : MovieService,public dialog: MatDialog) { 

  }

  addFunds(){
    let dialogRef = this.dialog.open(DialogOverviewAddFundsDialogComponent, {
      width: '250px',
      data: { budget: 10 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.moviesService.addBudget(result);
      
      
    });
  }

  ngOnInit() {
    
  }

}
