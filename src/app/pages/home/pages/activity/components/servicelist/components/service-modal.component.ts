import { CommonModule } from "@angular/common";
import { Component, EventEmitter, inject, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-service-modal',
  imports: [    
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbTooltipModule],
  templateUrl: './service-modal.component.html',
  styleUrl: './service-modal.component.scss'
})
export class ServiceModalComponent implements OnInit{
    @Input() activity: any;
    @Input() service: any;
    @Output() close= new EventEmitter<boolean>();
    
    public serviceForm!: FormGroup;
    private fb= inject(FormBuilder);
    
    ngOnInit() {
        this.serviceForm= this.fb.group({
        idservice: [null],
        name: [
            this.service?.name|| '',
            [Validators.required, Validators.minLength(5)]
        ],
        description: [
            this.service?.description|| '',
            [Validators.required, Validators.minLength(10)]
        ],
        duration: [
            this.service?.idDuration||null,
            [Validators.required]
        ],
        price: [
            this.service?.price||null,
            [Validators.required]
        ]
        });
    }


    closeModal(): void {
        this.close.emit(true);
        console.log('Modal cerrado');
    }

    save(): void{
        this.serviceForm.markAllAsTouched(); 
        if(this.serviceForm.valid) {
            console.log(this.serviceForm.getRawValue);
            this.closeModal();
        }
    }
}