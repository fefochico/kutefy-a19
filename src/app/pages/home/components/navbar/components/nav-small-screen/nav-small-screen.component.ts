import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nav-small-screen',
  imports: [RouterModule],
  templateUrl: './nav-small-screen.component.html',
  styleUrl: './nav-small-screen.component.scss'
})
export class NavSmallScreenComponent {
  public closeCollapseNavbar()
  {}
  public logout(){

  }
}
