import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManiaplanetNameComponent } from './maniaplanet-name.component';

describe('ManiaplanetNameComponent', () => {
  let component: ManiaplanetNameComponent;
  let fixture: ComponentFixture<ManiaplanetNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManiaplanetNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManiaplanetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
