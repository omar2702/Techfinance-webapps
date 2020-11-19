import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGrocerComponent } from './dashboard-grocer.component';

describe('DashboardGrocerComponent', () => {
  let component: DashboardGrocerComponent;
  let fixture: ComponentFixture<DashboardGrocerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGrocerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGrocerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
