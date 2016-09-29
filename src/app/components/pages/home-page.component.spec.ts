/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { RecipeSummaryFragmentComponent } from '../fragments/recipe-summary-fragment.component';
import { RecipeService } from '../../services/recipe.service';
import { PopulatedInMemoryRecipeService } from '../../services/populated-in-memory-recipe.service';

describe('Component: HomePage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        RecipeSummaryFragmentComponent
      ],
      providers: [
        {provide: RecipeService, useClass: PopulatedInMemoryRecipeService}
      ]
    });
  });


  it('should create an instance', async(() => {
    let fixture = TestBed.createComponent(HomePageComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});
