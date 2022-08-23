import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GopherDailyComponent } from './gopher-daily.component';

describe('GopherDailyComponent', () => {
  let component: GopherDailyComponent;
  let fixture: ComponentFixture<GopherDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GopherDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GopherDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
