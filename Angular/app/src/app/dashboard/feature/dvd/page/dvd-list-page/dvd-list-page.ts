import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '@shared/routes/enum';
import { DvdService } from '../../service/dvd.service';

@Component({
  selector: 'app-dvd-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dvd-list-page.html',
  styleUrl: './dvd-list-page.scss'
})
export class DvdListPageComponent implements OnInit {
  private readonly dvdService = inject(DvdService);
  routes = AppRoutes;
  list = this.dvdService.List$;

  ngOnInit(): void {
    this.dvdService.getAll().subscribe();
  }

  remove(id: string): void {
    this.dvdService.delete(id).subscribe((res) => {
      if (res.result) {
        this.dvdService.getAll().subscribe();
      }
    });
  }
}
