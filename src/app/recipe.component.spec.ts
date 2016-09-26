/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RecipeComponent } from './recipe.component';
import { RecipeService } from './recipe.service';

describe('Component: Recipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeComponent],
      providers: [RecipeService]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(RecipeComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
