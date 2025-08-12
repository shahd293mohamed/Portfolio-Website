import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postservices } from './postservices';

describe('Postservices', () => {
  let component: Postservices;
  let fixture: ComponentFixture<Postservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postservices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
