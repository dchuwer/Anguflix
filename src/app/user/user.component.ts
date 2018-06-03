import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User = new User();
  
  
  constructor() { 
    this.user.budget = 50;
  }
  
  
  ngOnInit() {
  }

}
