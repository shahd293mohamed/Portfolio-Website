import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateprojects } from './updateprojects';

describe('Updateprojects', () => {
  let component: Updateprojects;
  let fixture: ComponentFixture<Updateprojects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateprojects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateprojects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
