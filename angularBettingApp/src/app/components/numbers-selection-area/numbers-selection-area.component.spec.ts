import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersSelectionAreaComponent } from './numbers-selection-area.component';

describe('NumbersSelectionAreaComponent', () => {
  let component: NumbersSelectionAreaComponent;
  let fixture: ComponentFixture<NumbersSelectionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbersSelectionAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersSelectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
