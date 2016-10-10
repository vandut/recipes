/* tslint:disable:no-unused-variable */

import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { SimpleHttpRecipeService } from './simple-http-recipe.service';
import { Recipe } from '../dtos/recipe';

describe('Service: SimpleHttpRecipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleHttpRecipeService]
    });
  });

  it('should list recipes', fakeAsync(inject([SimpleHttpRecipeService], (service: SimpleHttpRecipeService) => {
    service.listRecipes()
      .then(() => fail("TODO"))
      .catch(message => expect(message).toEqual("not implemented"));
    tick();
  })));

  it('should get recipes', fakeAsync(inject([SimpleHttpRecipeService], (service: SimpleHttpRecipeService) => {
    service.getRecipe("id")
      .then(() => fail("TODO"))
      .catch(message => expect(message).toEqual("not implemented"));
    tick();
  })));

  it('should not support adding recipes', fakeAsync(inject([SimpleHttpRecipeService], (service: SimpleHttpRecipeService) => {
    service.addRecipe(new Recipe)
      .then(() => fail("Operation should not be implemented"))
      .catch(message => expect(message).toEqual("not supported"));
    tick();
  })));

  it('should not support removing recipes', fakeAsync(inject([SimpleHttpRecipeService], (service: SimpleHttpRecipeService) => {
    service.removeRecipe("id")
      .then(() => fail("Operation should not be implemented"))
      .catch(message => expect(message).toEqual("not supported"));
    tick();
  })));

});
