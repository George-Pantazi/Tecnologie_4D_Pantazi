import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lavoro1Component } from './lavoro1.component';

describe('Lavoro1Component', () => {
  let component: Lavoro1Component;
  let fixture: ComponentFixture<Lavoro1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lavoro1Component]
    });
    fixture = TestBed.createComponent(Lavoro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
