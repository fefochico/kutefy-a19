import { CommonModule } from "@angular/common";
import { Component, EventEmitter, inject, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-shift-modal',
  imports: [    
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbTooltipModule],
  templateUrl: './shift-modal.component.html',
  styleUrl: './shift-modal.component.scss'
})
export class ShiftModalComponent implements OnInit{
    @Input() shift: any;
    @Output() close= new EventEmitter<boolean>();
    
    public shiftForm!: FormGroup;
    private fb= inject(FormBuilder);
    times: any[] = [
        { text: '08:00', id: 1 },
        { text: '09:00', id: 2 },
        { text: '10:00', id: 3 },
        { text: '11:00', id: 4 },
        { text: '12:00', id: 5 },
        { text: '13:00', id: 6 },
        { text: '14:00', id: 7 },
        { text: '15:00', id: 8 },
        { text: '16:00', id: 9 },
        { text: '17:00', id: 10 }
    ];

    ngOnInit() {
        this.shiftForm= this.fb.group({
        idshift: [null],
        name: [
            this.shift?.name|| '',
            [Validators.required, Validators.minLength(5)]
        ],
        startTime: [
            this.shift?.idStartTime|| '',
            [Validators.required]
        ],
        endTime: [
            this.shift?.idEndTime|| '',
            [Validators.required]
        ],
        days: [this.shift?.days || [],
            [Validators.required]
        ]
    });
    }


    closeModal(): void {
        this.close.emit(true);
        console.log('Modal cerrado');
    }

    save(): void{
        this.shiftForm.markAllAsTouched(); 
        if(this.shiftForm.valid) {
            console.log(this.shiftForm.getRawValue);
            this.closeModal();
        }
    }
}