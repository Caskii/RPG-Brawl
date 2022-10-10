import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketPageComponent } from './bracket-page.component';

describe('BracketPageComponent', () => {
  let component: BracketPageComponent;
  let fixture: ComponentFixture<BracketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracketPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BracketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
