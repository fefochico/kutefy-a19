import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalContainerComponent } from '../../../../../../shared/components/modal-container.component';
import { ActivityModalComponent } from './components/activity-modal.component';

@Component({
  selector: 'activitylist',
  imports: [CommonModule],
  templateUrl: './activitylist.component.html',
  styleUrl: './activitylist.component.scss'
})
export class ActivitylistComponent {
  public activities: any[]=[{
    key: 1,
    name: 'Cortar',
    description: 'Description 1',
    date: '2021-01-01',
    status: 'enabled'
  },
{
    key: 2,
    name: 'Teñir',
    description: 'Description 2',
    date: '2021-01-01',
    status: 'enabled'
  }];
  
  private _ngbModalService = inject(NgbModal);

  edit(activity: any){
    const modalRef: NgbModalRef =this._ngbModalService.open(
      ModalContainerComponent,{size: 'md', backdrop: 'static', centered: true});
      if(modalRef.componentInstance){
        modalRef.componentInstance.componentToLoad= ActivityModalComponent;
        modalRef.componentInstance.componentInputs= {
          activity: activity
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
      ModalContainerComponent, {size: 'sm', backdrop: 'static', centered: true});
      if(modalRef.componentInstance){
        modalRef.componentInstance.title= 'Eliminar Actividad';
        modalRef.componentInstance.textContent= '¿Esta seguro que desea eliminar la actividad "' + data.name + '"?'
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
