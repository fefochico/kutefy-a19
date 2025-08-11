import { CommonModule } from "@angular/common";
import { Component, EventEmitter, inject, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-activity-modal',
  imports: [    
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbTooltipModule],
  templateUrl: './activity-modal.component.html',
  styleUrl: './activity-modal.component.scss'
})
export class ActivityModalComponent implements OnInit{
    @Input() activity: any;
    @Output() close= new EventEmitter<boolean>();
    
    public activityForm!: FormGroup;
    private fb= inject(FormBuilder);
    
    ngOnInit() {
        this.activityForm= this.fb.group({
        idactivity: [null],
        name: [
            this.activity?.name|| '',
            [Validators.required, Validators.minLength(5)]
        ],
        description: [
            this.activity?.description|| '',
            [Validators.required, Validators.minLength(10)]
        ],
        });
    }


    closeModal(): void {
        this.close.emit(true);
        console.log('Modal cerrado');
    }

    save(): void{
        this.activityForm.markAllAsTouched(); 
        if(this.activityForm.valid) {
            console.log(this.activityForm.getRawValue);
            this.closeModal();
        }
    }
}