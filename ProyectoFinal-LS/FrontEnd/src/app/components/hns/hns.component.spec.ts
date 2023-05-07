import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnsComponent } from './hns.component';

describe('HnsComponent', () => {
  let component: HnsComponent;
  let fixture: ComponentFixture<HnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HnsComponent]
    });
    fixture = TestBed.createComponent(HnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
