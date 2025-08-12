import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalContainerComponent } from '../../../../../../shared/components/modal-container.component';
import { ServiceModalComponent } from './components/service-modal.component';

@Component({
  selector: 'servicelist',
  imports: [CommonModule],
  templateUrl: './servicelist.component.html',
  styleUrl: './servicelist.component.scss'
})
export class ServicelistComponent {
  public activities: any[]= [{
    key: 1,
    name: 'Cortar',
    description: 'Description 1',
    status: 'enabled'
  },
  {
    key: 2,
    name: 'Teñir',
    description: 'Description 2',
    status: 'enabled'
  }
];
  public services: any[]= [
    {
      key: 1,
      keyactivity: 1,
      name: 'Corte con degradado',
      description: 'Description 1',
      date: '2021-01-01',
      duration: '01:00:00',
      idDuration: 2,
      price: 100.00,
      status: 'enabled'
    },
        {
      key: 2,
      keyactivity: 2,
      name: 'Mechas',
      description: 'Description 2',
      date: '2021-01-01',
      duration: '01:00:00',
      idDuration: 1,
      price: 50.00,
      status: 'enabled'
    }
  ];
  
  private _ngbModalService = inject(NgbModal);


  edit(activity: any, service: any){
    const modalRef: NgbModalRef =this._ngbModalService.open(
      ModalContainerComponent,{size: 'md', backdrop: 'static', centered: true});
      if(modalRef.componentInstance){
        modalRef.componentInstance.componentToLoad= ServiceModalComponent;
        modalRef.componentInstance.componentInputs= {
          activity: activity,
          service: service,
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
        modalRef.componentInstance.title= 'Eliminar Servicio';
        modalRef.componentInstance.textContent= '¿Esta seguro que desea eliminar el servicio "' + data.name + '"?'
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
