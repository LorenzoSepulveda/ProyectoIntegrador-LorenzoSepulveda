import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from "./AboutMeComponent";

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeComponent]
    });
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
