import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalContainerComponent } from '../../../../../../shared/components/modal-container.component';
import { ShiftModalComponent } from './components/shift-modal.component';

@Component({
  selector: 'app-shiftlist',
  imports: [],
  templateUrl: './shiftlist.component.html',
  styleUrl: './shiftlist.component.scss'
})
export class ShiftlistComponent {
  shifts: any[] = [
    {
      name: 'Mañana',
      description: 'Turno de mañana',
      startTime: '08:00',
      idStartTime: 1,
      idEndTime: 5,
      endTime: '12:00',
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    },
    {
      name: 'Tarde',
      description: 'Turno de tarde',
      startTime: '13:00',
      idStartTime: 6,
      idEndTime: 10,
      endTime: '17:00',
      days: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    }
  ];


  private _ngbModalService = inject(NgbModal);

  edit(shift: any){
    const modalRef: NgbModalRef =this._ngbModalService.open(
      ModalContainerComponent,{size: 'md', backdrop: 'static', centered: true});
      if(modalRef.componentInstance){
        modalRef.componentInstance.componentToLoad= ShiftModalComponent;
        modalRef.componentInstance.componentInputs= {
          shift: shift
        };
        modalRef.componentInstance.componentOutputs= {
          close:()=>{
            modalRef.close()
          }
        }
      }

  }

  public remove(data: any){
    const modalRef: NgbModalRef = this._ngbModalService.open(
      ModalContainerComponent, {size: 'md', backdrop: 'static', centered: true});
      if(modalRef.componentInstance){
        modalRef.componentInstance.title= 'Eliminar Turno';
        modalRef.componentInstance.textContent= '¿Esta seguro que desea eliminar el turno "' + data.name + '"?'
        modalRef.componentInstance.actions= [
          {
            text: 'Cancelar',
            type: 'secondary',
            fn:()=>{
              modalRef.dismiss();
            }
          },
          {
            text: 'Aceptar',
            type: 'secondary',
            fn:()=>{
              modalRef.dismiss();
            }
          },
        ]
      }
  }
}
