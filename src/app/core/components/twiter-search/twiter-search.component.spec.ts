import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwiterSearchComponent } from './twiter-search.component';

describe('TwiterSearchComponent', () => {
  let component: TwiterSearchComponent;
  let fixture: ComponentFixture<TwiterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwiterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwiterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
