import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getservices } from './getservices';

describe('Getservices', () => {
  let component: Getservices;
  let fixture: ComponentFixture<Getservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getservices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
