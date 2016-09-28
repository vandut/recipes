/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { InMemoryRecipeService } from './in-memory-recipe.service';
import { Recipe } from '../dtos/recipe';

describe('Service: InMemoryRecipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryRecipeService]
    });
  });

  it('contains no recipes after creation', inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    expect(service.listRecipes()).toEqual([]);
  }));

  it('returns null on invalid id', inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    expect(service.getRecipe('abcd')).toBeFalsy();
  }));

  it('adds new recipe', inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    let recipe = new Recipe();
    recipe.id = 'abcd';
    service.addRecipe(recipe);
    expect(service.getRecipe('abcd')).toBeTruthy();
  }));

  it('removes existing recipe when valid id', inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    let recipe = new Recipe();
    recipe.id = 'abcd';
    service.addRecipe(recipe);
    expect(service.removeRecipe('abcd')).toBeTruthy();
  }));

  it('report failed removal of unknown recipe', inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    expect(service.removeRecipe('abcd')).toBeFalsy();
  }));

});
