/* tslint:disable:no-unused-variable */

import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { InMemoryRecipeService } from './in-memory-recipe.service';
import { Recipe } from '../dtos/recipe';

describe('Service: InMemoryRecipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryRecipeService]
    });
  });

  it('contains no recipes after creation', fakeAsync(inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    service.listRecipes().then(
      result => expect(result).toEqual([])
    );
    tick();
  })));

  it('returns null on invalid id', fakeAsync(inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    service.getRecipe('abcd').then(
      result => expect(result).toBeFalsy()
    );
    tick();
  })));

  it('adds new recipe', fakeAsync(inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    let recipe = new Recipe();
    recipe.id = 'abcd';
    service.addRecipe(recipe);
    tick();
    service.getRecipe('abcd').then(
      result => expect(result).toBeTruthy()
    );
    tick();
  })));

  it('removes existing recipe when valid id', fakeAsync(inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    let recipe = new Recipe();
    recipe.id = 'abcd';
    service.addRecipe(recipe);
    tick();
    service.removeRecipe('abcd').then(
      result => expect(result).toBeTruthy()
    );
    tick();
  })));

  it('report failed removal of unknown recipe', fakeAsync(inject([InMemoryRecipeService], (service: InMemoryRecipeService) => {
    service.removeRecipe('abcd').then(
      result => expect(result).toBeFalsy()
    );
    tick();
  })));

});
