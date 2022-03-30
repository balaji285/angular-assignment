import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupcontentComponent } from './signupcontent.component';

describe('SignupcontentComponent', () => {
  let component: SignupcontentComponent;
  let fixture: ComponentFixture<SignupcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
