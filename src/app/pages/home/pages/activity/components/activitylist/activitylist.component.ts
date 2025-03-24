import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'activitylist',
  imports: [CommonModule],
  templateUrl: './activitylist.component.html',
  styleUrl: './activitylist.component.scss'
})
export class ActivitylistComponent {
  public activities: any[]=[{
    key: 1,
    name: 'Activity 1',
    description: 'Description 1',
    date: '2021-01-01',
    time: '00:00:00',
    duration: '01:00:00',
    price: 100.00
  }];
  
  constructor(){}

  edit(activity: any){

  }

  public remove(data: any){

  }
}
