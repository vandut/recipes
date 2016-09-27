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
    expect(service.listRecipes()).toEqual(['7bc8aee8-fdca-4c90-b944-5682801bde0b', '7217942a-a5a8-4ad3-ab73-9cb4f78e23de']);
  }));

  it('returns valid recipe on valid id', inject([MockRecipeService], (service: MockRecipeService) => {
    expect(service.getRecipe('7bc8aee8-fdca-4c90-b944-5682801bde0b')).toBeTruthy();
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
    expect(service.removeRecipe('7bc8aee8-fdca-4c90-b944-5682801bde0b')).toBeTruthy();
  }));

  it('report failed removal of unknown recipe', inject([MockRecipeService], (service: MockRecipeService) => {
    expect(service.removeRecipe('abcd')).toBeFalsy();
  }));

});
