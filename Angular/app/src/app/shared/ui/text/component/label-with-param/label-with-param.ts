import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-label-with-param',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './label-with-param.html'
})
export class LabelWithParamComponent {
  @Input({ required: true }) label!: string;
  @Input() params?: any;
}
