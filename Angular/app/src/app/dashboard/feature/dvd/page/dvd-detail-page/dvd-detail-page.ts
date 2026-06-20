import { Component, OnInit, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@shared/routes/enum';
import { DvdService } from '../../service/dvd.service';

@Component({
  selector: 'app-dvd-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dvd-detail-page.html',
  styleUrl: './dvd-detail-page.scss'
})
export class DvdDetailPageComponent implements OnInit {
  @Input() id!: string;
  private readonly dvdService = inject(DvdService);
  routes = AppRoutes;
  dvd = this.dvdService.Detail$;

  ngOnInit(): void {
    this.dvdService.detail(this.id).subscribe();
  }
}
