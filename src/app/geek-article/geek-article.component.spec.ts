import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekArticleComponent } from './geek-article.component';

describe('GeekArticleComponent', () => {
  let component: GeekArticleComponent;
  let fixture: ComponentFixture<GeekArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeekArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
