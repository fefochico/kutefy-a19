import { Component } from '@angular/core';
import { NavSmallScreenComponent } from './components/nav-small-screen/nav-small-screen.component';
import { NavBigScreenComponent } from './components/nav-big-screen/nav-big-screen.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'navbar',
  imports: [NgbCollapseModule, NavSmallScreenComponent, NavBigScreenComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isNavbarSmallCollapsed = true; 

}
