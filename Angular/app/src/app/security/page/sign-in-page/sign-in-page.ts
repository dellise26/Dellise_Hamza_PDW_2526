import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in-page.html',
  styleUrl: './sign-in-page.scss'
})
export class SignInPageComponent {
  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(1)]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Données du formulaire:', this.formGroup.value);
      // Envoyez les données au service
    }
  }

  hasError(field: string, errorType: string): boolean {
    const control = this.formGroup.get(field);
    return control ? control.hasError(errorType) && control.touched : false;
  }
}