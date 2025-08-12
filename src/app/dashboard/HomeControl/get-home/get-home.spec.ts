import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHome } from './get-home';

describe('GetHome', () => {
  let component: GetHome;
  let fixture: ComponentFixture<GetHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
