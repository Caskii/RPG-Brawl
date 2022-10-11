import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInCardComponent } from './map-in-card.component';

describe('MapInCardComponent', () => {
  let component: MapInCardComponent;
  let fixture: ComponentFixture<MapInCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapInCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapInCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
