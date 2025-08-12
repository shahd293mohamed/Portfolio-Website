import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContactus } from './get-contactus';

describe('GetContactus', () => {
  let component: GetContactus;
  let fixture: ComponentFixture<GetContactus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetContactus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetContactus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
