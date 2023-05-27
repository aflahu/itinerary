import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanggananComponent } from './langganan.component';

describe('LanggananComponent', () => {
  let component: LanggananComponent;
  let fixture: ComponentFixture<LanggananComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanggananComponent]
    });
    fixture = TestBed.createComponent(LanggananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
