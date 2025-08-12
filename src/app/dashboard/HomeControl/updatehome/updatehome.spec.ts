import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatehome } from './updatehome';

describe('Updatehome', () => {
  let component: Updatehome;
  let fixture: ComponentFixture<Updatehome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatehome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatehome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
