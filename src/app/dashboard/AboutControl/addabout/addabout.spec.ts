import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addabout } from './addabout';

describe('Addabout', () => {
  let component: Addabout;
  let fixture: ComponentFixture<Addabout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addabout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addabout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
