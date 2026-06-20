import { Component, signal, WritableSignal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppRoutes } from '@shared/routes/enum';
import { FloatingLabelInputComponent } from '@shared/ui/form/floating-label-input/floating-label-input';
import { FormError } from '@shared/ui/form/type';
import { handleFormError } from '@shared/ui/form/helper';
import { DvdService } from '../../service/dvd.service';
import { DvdCreatePayload } from '../../model/types';
import { DvdGenre } from '../../enum';

@Component({
  selector: 'app-dvd-create-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FloatingLabelInputComponent, RouterLink],
  templateUrl: './dvd-create-page.html',
  styleUrl: './dvd-create-page.scss'
})
export class DvdCreatePageComponent {
  private readonly dvdService = inject(DvdService);
  private readonly router = inject(Router);

  genres = Object.values(DvdGenre);
  routes = AppRoutes;
  formGroup!: FormGroup;
  errors: WritableSignal<FormError[]> = signal([]);

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
    const v = this.formGroup.value;
    const payload: DvdCreatePayload = {
      title: v.title,
      director: v.director,
      description: v.description,
      genre: v.genre,
      releaseYear: v.releaseYear ? Number(v.releaseYear) : null,
      price: Number(v.price),
      stock: Number(v.stock)
    };
    this.dvdService.create(payload).subscribe((res) => {
      if (res.result) {
        this.router.navigate([AppRoutes.DVD]);
      }
    });
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      title: new FormControl<string>('', [Validators.required, Validators.maxLength(80)]),
      director: new FormControl<string>(''),
      description: new FormControl<string>(''),
      genre: new FormControl<string>(DvdGenre.OTHER),
      releaseYear: new FormControl<string>(''),
      price: new FormControl<string>('', [Validators.required]),
      stock: new FormControl<string>('', [Validators.required])
    });
  }
}
