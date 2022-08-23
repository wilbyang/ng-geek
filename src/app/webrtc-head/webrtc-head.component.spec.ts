import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebrtcHeadComponent } from './webrtc-head.component';

describe('WebrtcHeadComponent', () => {
  let component: WebrtcHeadComponent;
  let fixture: ComponentFixture<WebrtcHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebrtcHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebrtcHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
