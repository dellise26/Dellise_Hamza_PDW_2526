import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '@shared/core/enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'app';
  translate = inject(TranslateService);

  ngOnInit(): void {
    this.translate.setFallbackLang(Language.FR);
    this.translate.use(Language.FR);
  }
}
