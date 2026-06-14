import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomePage } from './dashboard-home-page';

describe('DashboardHomePage', () => {
  let component: DashboardHomePage;
  let fixture: ComponentFixture<DashboardHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
