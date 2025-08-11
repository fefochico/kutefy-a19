import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info',
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbTooltipModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit {
  public infoForm!: FormGroup;
  public error: string= '';
  public saving: boolean= false;
  public visible: boolean= true;
  public country: any;

  private fb= inject(FormBuilder);
  constructor() {
    this.country = [
      { id: 1, name: 'Perú' },
      { id: 2, name: 'Colombia' },
      { id: 3, name: 'Chile' },
      { id: 4, name: 'Argentina' }
    ];
  }

  ngOnInit(): void {
    this.infoForm= this.fb.group({
      iduser: [null],
      name: [
        '',
        [Validators.required, Validators.minLength(5)]
      ],
      description: [
        '',
        [Validators.required, Validators.minLength(10)]
      ],
      phone1: [
        '',
        [Validators.required, Validators.minLength(9), Validators.pattern('^[0-9]*$')]
      ],
      phone2: [
        '',
        [Validators.minLength(9), Validators.pattern('^[0-9]*$')]
      ],
      idcountry: [
        null,
        Validators.required
      ],
      city: [
        '',
        Validators.required
      ],
      address: [
        '',
        Validators.required
      ],
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      id: [null]
    });
  }

  public saveInfoShop(){
    this.infoForm.markAllAsTouched();
    if(this.infoForm.valid){
      console.log('Formulario válido')
      console.log(this.infoForm.value);
    }else{
      console.log('Formulario inválido')
      this.infoForm.markAllAsTouched()
    }
  }



}
