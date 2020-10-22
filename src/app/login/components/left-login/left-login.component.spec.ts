import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftLoginComponent } from './left-login.component';

describe('LeftLoginComponent', () => {
  let component: LeftLoginComponent;
  let fixture: ComponentFixture<LeftLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
