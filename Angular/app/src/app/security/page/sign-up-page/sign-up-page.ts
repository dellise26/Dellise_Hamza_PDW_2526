import { Component, signal, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FloatingLabelInputComponent } from '@shared/ui/form/floating-label-input/floating-label-input';
import { LabelWithParamComponent } from '@shared/ui/text/component/label-with-param/label-with-param';
import { FormError } from '@shared/ui/form/type';
import { handleFormError } from '@shared/ui/form/helper';
import { AppRoutes } from '@shared/routes/enum';
import { AuthService } from '../../service/auth.service';
import { SignUpPayload } from '../../data/payload/signup.payload';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [CommonModule, FloatingLabelInputComponent, ReactiveFormsModule, LabelWithParamComponent],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.scss'
})
export class SignUpPageComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  formGroup!: FormGroup;
  errors: WritableSignal<FormError[]> = signal([]);
  signUpFailed: WritableSignal<boolean> = signal(false);

  constructor() {
    this.initFormGroup();
    handleFormError(this.formGroup, this.errors);
  }

  get(key: string): FormControl<any> {
    return this.formGroup.get(key)! as FormControl<any>;
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }
    this.signUpFailed.set(false);
    const payload: SignUpPayload = {
      ...this.formGroup.value,
      googleHash: '',
      facebookHash: ''
    } as SignUpPayload;
    this.authService.signUp(payload).subscribe((res) => {
      if (res.result) {
        this.router.navigate([AppRoutes.AUTHENTICATED]);
      } else {
        this.signUpFailed.set(true);
      }
    });
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      username: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      mail: new FormControl<string>('', [Validators.required, Validators.email])
    });
  }
}
