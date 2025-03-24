import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'servicelist',
  imports: [CommonModule],
  templateUrl: './servicelist.component.html',
  styleUrl: './servicelist.component.scss'
})
export class ServicelistComponent {
  public services: any[]= [{
    key: 1,
    name: 'Service 1',
    description: 'Description 1',
    price: 100
  }];
  public activities: any[]= [
    {
      key: 1,
      name: 'Activity 1',
      description: 'Description 1',
      date: '2021-01-01',
      time: '00:00:00',
      duration: '01:00:00',
      price: 100.00
    }
  ];
  constructor(){}

  public edit(activity: any, service: any){

  }

  public remove(data: any){

  }

}
