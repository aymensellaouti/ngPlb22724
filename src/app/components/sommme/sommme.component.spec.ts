import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommmeComponent } from './sommme.component';

describe('SommmeComponent', () => {
  let component: SommmeComponent;
  let fixture: ComponentFixture<SommmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SommmeComponent]
    });
    fixture = TestBed.createComponent(SommmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
