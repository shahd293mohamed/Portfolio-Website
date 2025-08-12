import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAbout } from './manage-about';

describe('ManageAbout', () => {
  let component: ManageAbout;
  let fixture: ComponentFixture<ManageAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
