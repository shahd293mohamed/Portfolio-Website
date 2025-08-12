import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateservices } from './updateservices';

describe('Updateservices', () => {
  let component: Updateservices;
  let fixture: ComponentFixture<Updateservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateservices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
