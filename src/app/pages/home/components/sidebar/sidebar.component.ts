import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public selectedIndex: number=1;

  public setIndex(index: number){
    this.selectedIndex= index;
  }
}
