import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualClientsComponent } from './visual-clients.component';

describe('VisualClientsComponent', () => {
  let component: VisualClientsComponent;
  let fixture: ComponentFixture<VisualClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
