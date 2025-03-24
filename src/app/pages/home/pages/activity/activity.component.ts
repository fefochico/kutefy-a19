import { Component } from '@angular/core';
import { ActivitylistComponent } from './components/activitylist/activitylist.component';
import { ServicelistComponent } from './components/servicelist/servicelist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  imports: [CommonModule, ActivitylistComponent, ServicelistComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {

}
