import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public error: string='';
  public isSubmitted: boolean= false;
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private _router: Router, private _authService: AuthService){
    this.userForm= this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  public send(){
    const username = this.userForm!.get('username')?.value;
    const password = this.userForm!.get('password')?.value;
    if(username && password){
      this._authService.login(username, password).subscribe(
        response => {
          console.log('Login successful', response);
          // Aquí puedes redirigir al usuario a la página principal o a otra página
          this._router.navigate(['/']);

        },
        error => {
          console.error('Login failed', error);
          this.error = 'Fallo en el login. Por favor compruebe el usuario y contraseña.';
        }
      );
    }
  }
}
