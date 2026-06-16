import { Component, OnInit, Input, inject, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberService } from '../../service/member.service';

@Component({
  selector: 'app-member-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-detail-page.html',
  styleUrl: './member-detail-page.scss'
})
export class MemberDetailPageComponent implements OnInit {
  @Input() id!: string;
  readonly memberService = inject(MemberService);
  detail$: Signal<string> = computed(() => this.memberService.List$().find(m => m === this.id) || 'not found');

  ngOnInit(): void {
    this.setDetail();
  }

  private setDetail(): void {
    this.memberService.setDetail(this.id);
  }
}
