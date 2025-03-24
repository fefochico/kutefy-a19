import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  public infoForm: FormGroup;
  public error: string= '';
  public saving: boolean= false;
  public visible: boolean= true;
  public country: any;

  constructor(private fb: FormBuilder){
    this.infoForm= this.fb.group({
      iduser: [null],
      name: [
        '',
        Validators.required
      ],
      description: [
        '',
        Validators.required
      ],
      phone1: [
        '',
        Validators.required
      ],
      phone2: [
        ''
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
        Validators.required
      ],
      id: [null]
    });
  }

  public saveInfoShop(){

  }



}
