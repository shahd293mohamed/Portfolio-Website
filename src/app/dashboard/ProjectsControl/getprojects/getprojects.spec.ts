import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getprojects } from './getprojects';

describe('Getprojects', () => {
  let component: Getprojects;
  let fixture: ComponentFixture<Getprojects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getprojects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getprojects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
