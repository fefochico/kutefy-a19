import { Component, EventEmitter, Input, input, InputSignal, InputSignalWithTransform, Output, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nav-small-screen',
  imports: [RouterModule, NgbCollapseModule],
  templateUrl: './nav-small-screen.component.html',
  styleUrl: './nav-small-screen.component.scss'
})
export class NavSmallScreenComponent {
  @Output() collapseNavbar: EventEmitter<boolean> = new EventEmitter<boolean>();
  public logout(){

  }

  closeCollapseNavbar() {
    this.collapseNavbar.emit(true);
  }
}
