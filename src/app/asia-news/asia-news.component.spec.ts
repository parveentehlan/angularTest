import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaNewsComponent } from './asia-news.component';

describe('AsiaNewsComponent', () => {
  let component: AsiaNewsComponent;
  let fixture: ComponentFixture<AsiaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsiaNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
