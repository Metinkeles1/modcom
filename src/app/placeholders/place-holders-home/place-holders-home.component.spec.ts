import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHoldersHomeComponent } from './place-holders-home.component';

describe('PlaceHoldersHomeComponent', () => {
  let component: PlaceHoldersHomeComponent;
  let fixture: ComponentFixture<PlaceHoldersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceHoldersHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceHoldersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
