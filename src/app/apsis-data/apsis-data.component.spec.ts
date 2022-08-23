import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApsisDataComponent } from './apsis-data.component';

describe('ApsisDataComponent', () => {
  let component: ApsisDataComponent;
  let fixture: ComponentFixture<ApsisDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApsisDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApsisDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
