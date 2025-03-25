import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarSignalService {
  private selectedMenuItem = signal<number>(1);

  constructor() {}

  // Seleccionar un elemento del menú
  selectMenuItem(index: number): void {
    this.selectedMenuItem.set(index);
  }

  // Obtener el elemento del menú seleccionado como signal
  getSelectedMenuItem() {
    return this.selectedMenuItem;
  }
}
