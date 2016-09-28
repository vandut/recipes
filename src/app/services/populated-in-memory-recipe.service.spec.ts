/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PopulatedInMemoryRecipeService } from './populated-in-memory-recipe.service';

describe('Service: PopulatedInMemoryRecipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulatedInMemoryRecipeService]
    });
  });

  it('lists recipes ids', inject([PopulatedInMemoryRecipeService], (service: PopulatedInMemoryRecipeService) => {
    expect(service.listRecipes()).toEqual(['wrG2k', 'zkaJr']);
  }));

  it('returns valid recipe on valid id', inject([PopulatedInMemoryRecipeService], (service: PopulatedInMemoryRecipeService) => {
    expect(service.getRecipe('wrG2k')).toBeTruthy();
    expect(service.getRecipe('zkaJr')).toBeTruthy();
  }));

});
