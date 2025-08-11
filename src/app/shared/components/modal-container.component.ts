
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ComponentRef, EventEmitter, inject, Input, OnDestroy, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/internal/Subscription';

export interface ModalActionBtnFooter {
  text: string;
  type: 'primary' | 'secondary' | 'danger' | string; // Optional: for styling (e.g., 'confirm', 'cancel')
  fn: () => void;   // The function to execute when the button is clicked
}

//Para obtener los atributos de un Componente a añadir
export interface DynamicComponentData {
  [key: string]: any; // Permite cualquier propiedad con cualquier tipo
}

@Component({
  selector: 'app-modal-continer',
  imports: [CommonModule],
  templateUrl: './modal-container.component.html',
})
export class ModalContainerComponent implements OnInit, OnDestroy {
  //Atributos input
  @Input() title: string = '';

  //Campos para mostrar
  @Input() showCloseButtonInHeader: boolean = true;
  @Input() actions: ModalActionBtnFooter[] = [];

  // Para mostrar en el bosy un texto plano con ngx-translate
  @Input() textContent: string = '';
  @Input() defaultLabels:{cancel?: string, noContent?: string}={};
  // Para mostrar en el body componente dinámico
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: false })
  dynamicComponentContainer!: ViewContainerRef;
  @Input() componentToLoad: Type<any> | null = null; // Para componente dinámico
  @Input() componentInputs: DynamicComponentData = {}; // Datos para componente dinámico
  @Input() componentOutputs: { [key: string]: (data: any) => void } = {};
  private outputSubscriptions: Subscription[] = []; // Array para almacenar las suscripciones

  private dynamicComponentRef: ComponentRef<any> | null = null;

  // Para mostrar en el body un TemplateRef
  @Input() bodyTemplate: TemplateRef<any> | null = null; // Para contenido de TemplateRef

  private _activeModal= inject(NgbActiveModal);

  /**
   * Método del ciclo de vida del componente que se ejecuta en el momento en que se 
   * carga la vista.
   */
  ngOnInit(): void {
    if (this.componentToLoad) { // Si se quiere añadir un componente dinámico
      Promise.resolve().then(()=>
        this.loadDynamicComponent()
      )
    }
  }

  /**
   * Método privado que nos permite crear el componente dinámico en el body del modal y pasarle sus inputs
   */
  private loadDynamicComponent(): void {
    this.dynamicComponentContainer.clear();
    this.dynamicComponentRef = this.dynamicComponentContainer.createComponent(this.componentToLoad!);
    
    // Asignar inputs
    for (const key in this.componentInputs) {
      if (this.componentInputs.hasOwnProperty(key)) {
        this.dynamicComponentRef.instance[key] = this.componentInputs[key];
      }
    }

    // Suscribirse a outputs
    for (const key in this.componentOutputs) {
      if (this.componentOutputs.hasOwnProperty(key)) {
        const outputEmitter = this.dynamicComponentRef.instance[key];
        if (outputEmitter instanceof EventEmitter) {
          const subscription = outputEmitter.subscribe(this.componentOutputs[key]);
          this.outputSubscriptions.push(subscription); // Almacenar la suscripción
        } else {
          console.warn(`Output '${key}' no es un EventEmitter en el componente dinámico.`);
        }
      }
    }
  }

  /**
   * Método publico que nos permite cerrar la ventana modal
   */
  cancel(){
    this._activeModal.dismiss();
  }

  /**
   * Método del ciclo de vida del componente que se ejecuta en el momento en que se 
   * se destruye el componente.
   */
  ngOnDestroy(): void {
    if (this.dynamicComponentRef) { // Si existe un componente dinamico lo destruimos
      this.dynamicComponentRef.destroy();
    }
    // Desuscribirse de todas las suscripciones de outputs
    this.outputSubscriptions.forEach(sub => sub.unsubscribe());
    this.outputSubscriptions = []; // Limpiar el array
  }
}