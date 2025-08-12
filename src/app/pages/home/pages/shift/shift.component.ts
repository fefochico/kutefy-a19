import { Component } from '@angular/core';
import { ShiftlistComponent } from './components/shiftlist/shiftlist.component';

@Component({
  selector: 'app-shift',
  imports: [ShiftlistComponent],
  templateUrl: './shift.component.html',
  styleUrl: './shift.component.scss'
})
export class ShiftComponent {
}
