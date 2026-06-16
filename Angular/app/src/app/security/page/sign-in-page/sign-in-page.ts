import { Component, signal, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FloatingLabelInputComponent } from '@shared/ui/form/floating-label-input/floating-label-input';
import { LabelWithParamComponent } from '@shared/ui/text/component/label-with-param/label-with-param';
import { FormError } from '@shared/ui/form/type';
import { handleFormError } from '@shared/ui/form/helper';
import { AppRoutes } from '@shared/routes/enum';
import { AuthService } from '../../service/auth.service';
import { SignInPayload } from '../../data/payload/signin.payload';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, FloatingLabelInputComponent, ReactiveFormsModule, LabelWithParamComponent, RouterLink],
  templateUrl: './sign-in-page.html',
  styleUrl: './sign-in-page.scss'
})
export class SignInPageComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  formGroup!: FormGroup;
  errors: WritableSignal<FormError[]> = signal([]);
  loginFailed: WritableSignal<boolean> = signal(false);

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
    this.loginFailed.set(false);
    const payload: SignInPayload = {
      ...this.formGroup.value,
      socialLogin: false,
      googleHash: '',
      facebookHash: ''
    } as SignInPayload;
    this.authService.signIn(payload).subscribe((res) => {
      if (res.result) {
        this.router.navigate([AppRoutes.AUTHENTICATED]);
      } else {
        this.loginFailed.set(true);
      }
    });
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      username: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
      password: new FormControl<string>('', [Validators.required])
    });
  }
}
