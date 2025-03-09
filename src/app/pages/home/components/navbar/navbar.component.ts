import { Component } from '@angular/core';
import { NavSmallScreenComponent } from './components/nav-small-screen/nav-small-screen.component';
import { NavBigScreenComponent } from './components/nav-big-screen/nav-big-screen.component';

@Component({
  selector: 'navbar',
  imports: [NavSmallScreenComponent, NavBigScreenComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
}
