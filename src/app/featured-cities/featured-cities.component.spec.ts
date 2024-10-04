//featured-cities.component.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCitiesComponent } from './featured-cities.component';

describe('FeaturedCitiesComponent', () => {
  let component: FeaturedCitiesComponent;
  let fixture: ComponentFixture<FeaturedCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
