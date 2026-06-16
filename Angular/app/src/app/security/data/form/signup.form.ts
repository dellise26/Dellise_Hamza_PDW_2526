import { FormControl } from '@angular/forms';

export interface SignUpForm {
  username: FormControl<string>;
  password: FormControl<string>;
  mail: FormControl<string>;
}
