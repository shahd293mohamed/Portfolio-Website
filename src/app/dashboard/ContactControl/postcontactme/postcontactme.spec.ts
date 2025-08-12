import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postcontactme } from './postcontactme';

describe('Postcontactme', () => {
  let component: Postcontactme;
  let fixture: ComponentFixture<Postcontactme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postcontactme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postcontactme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
