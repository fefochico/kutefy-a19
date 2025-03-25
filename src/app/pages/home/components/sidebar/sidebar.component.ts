import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';
import { NavbarSignalService } from '../../services/navbar-signal.service';

@Component({
  selector: 'sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public selectedIndex!: number;

  constructor(private navbarSignalService: NavbarSignalService,private localStorageService: LocalStorageService){
    effect(() => {
      this.selectedIndex = this.navbarSignalService.getSelectedMenuItem()();
    });
    const index: number | null= this.localStorageService.getItem('selectedMenuOption');
    if(index) this.navbarSignalService.selectMenuItem(index);
    else this.navbarSignalService.selectMenuItem(1);
  }


  public setIndex(index: number){
    this.selectedIndex= index;
    this.localStorageService.setItem('selectedMenuOption', index);
  }
}
