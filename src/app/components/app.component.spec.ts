/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe.component';
import { RecipeService } from '../services/recipe.service';
import { InMemoryRecipeService } from '../services/in-memory-recipe.service';

describe('App: Recipes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RecipeComponent
      ],
      providers: [
        {provide: RecipeService, useClass: InMemoryRecipeService}
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
