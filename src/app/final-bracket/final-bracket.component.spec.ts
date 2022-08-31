import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBracketComponent } from './final-bracket.component';

describe('FinalBracketComponent', () => {
  let component: FinalBracketComponent;
  let fixture: ComponentFixture<FinalBracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalBracketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
