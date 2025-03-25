import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../../../../shared/services/local-storage.service';
import { NavbarSignalService } from '../../../../services/navbar-signal.service';

@Component({
  selector: 'nav-small-screen',
  imports: [RouterModule],
  templateUrl: './nav-small-screen.component.html',
  styleUrl: './nav-small-screen.component.scss'
})
export class NavSmallScreenComponent {
  constructor(private navbarSignalService: NavbarSignalService, private localStorageService: LocalStorageService){}
  
  
  public closeCollapseNavbar(index: number |  null){
    if(index) {
      this.navbarSignalService.selectMenuItem(index);
      this.localStorageService.setItem('selectedMenuOption', index);
    }
  }

  public logout(){

  }
}
