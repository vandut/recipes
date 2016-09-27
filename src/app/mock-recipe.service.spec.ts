/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { MockRecipeService } from './mock-recipe.service';
import { Recipe } from './recipe';

describe('Service: MockRecipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockRecipeService]
    });
  });

  it('lists recipes ids', inject([MockRecipeService], (service: MockRecipeService) => {
    expect(service.listRecipes()).toEqual(['wrG2k', 'zkaJr']);
  }));

  it('returns valid recipe on valid id', inject([MockRecipeService], (service: MockRecipeService) => {
    expect(service.getRecipe('wrG2k')).toBeTruthy();
  }));

  it('returns null on invalid id', inject([MockRecipeService], (service: MockRecipeService) => {
    expect(service.getRecipe('abcd')).toBeFalsy();
  }));

  it('adds new recipe', inject([MockRecipeService], (service: MockRecipeService) => {
    let recipe = new Recipe();
    recipe.id = 'abcd';
    service.addRecipe(recipe);
    expect(service.getRecipe('abcd')).toBeTruthy();
  }));

  it('removes existing recipe when valid id', inject([MockRecipeService], (service: MockRecipeService) => {
    expect(service.removeRecipe('wrG2k')).toBeTruthy();
  }));

  it('report failed removal of unknown recipe', inject([MockRecipeService], (service: MockRecipeService) => {
    expect(service.removeRecipe('abcd')).toBeFalsy();
  }));

});
