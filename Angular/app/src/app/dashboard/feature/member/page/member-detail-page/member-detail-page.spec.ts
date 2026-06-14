import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailPage } from './member-detail-page';

describe('MemberDetailPage', () => {
  let component: MemberDetailPage;
  let fixture: ComponentFixture<MemberDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberDetailPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberDetailPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
