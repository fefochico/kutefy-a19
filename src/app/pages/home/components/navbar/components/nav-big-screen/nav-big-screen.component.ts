import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nav-big-screen',
  imports: [RouterModule, NgbDropdownModule],
  templateUrl: './nav-big-screen.component.html',
  styleUrl: './nav-big-screen.component.scss'
})
export class NavBigScreenComponent {

}
