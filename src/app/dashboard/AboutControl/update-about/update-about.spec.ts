import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAbout } from './update-about';

describe('UpdateAbout', () => {
  let component: UpdateAbout;
  let fixture: ComponentFixture<UpdateAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
