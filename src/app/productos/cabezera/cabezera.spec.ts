import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabezera } from './cabezera';

describe('Cabezera', () => {
  let component: Cabezera;
  let fixture: ComponentFixture<Cabezera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cabezera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabezera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
