/* tslint:disable:no-unused-variable */

import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { PopulatedInMemoryRecipeService } from './populated-in-memory-recipe.service';

describe('Service: PopulatedInMemoryRecipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopulatedInMemoryRecipeService]
    });
  });

  it('lists recipes ids', fakeAsync(inject([PopulatedInMemoryRecipeService], (service: PopulatedInMemoryRecipeService) => {
    service.listRecipes().then(
      result => expect(result).toEqual(['wrG2k', 'zkaJr'])
    );
    tick();
  })));

  it('returns valid recipe on valid id', fakeAsync(inject([PopulatedInMemoryRecipeService], (service: PopulatedInMemoryRecipeService) => {
    service.getRecipe('wrG2k').then(
      result => expect(result).toBeTruthy()
    );
    tick();
    service.getRecipe('zkaJr').then(
      result => expect(result).toBeTruthy()
    );
    tick();
  })));

  it('reports invalid recipe id', fakeAsync(inject([PopulatedInMemoryRecipeService], (service: PopulatedInMemoryRecipeService) => {
    service.getRecipe('ABCD').then(
      result => expect(result).toBeFalsy()
    );
    tick();
  })));

});
