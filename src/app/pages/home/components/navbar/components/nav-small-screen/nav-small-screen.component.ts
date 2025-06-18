import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nav-small-screen',
  imports: [RouterModule, NgbCollapseModule],
  templateUrl: './nav-small-screen.component.html',
  styleUrl: './nav-small-screen.component.scss'
})
export class NavSmallScreenComponent {
  isNavbarCollapsed = input(true); 

  public logout(){

  }

  closeCollapseNavbar(itemIndex: number | null) {
  }
}
