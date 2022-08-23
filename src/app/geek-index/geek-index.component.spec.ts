import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekIndexComponent } from './geek-index.component';

describe('GeekIndexComponent', () => {
  let component: GeekIndexComponent;
  let fixture: ComponentFixture<GeekIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeekIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
