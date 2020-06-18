import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesBtnComponent } from './favourites-btn.component';

describe('FavouritesBtnComponent', () => {
  let component: FavouritesBtnComponent;
  let fixture: ComponentFixture<FavouritesBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
