/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page.component';
import { RecipeService } from '../services/recipe.service';
import { PopulatedInMemoryRecipeService } from '../services/populated-in-memory-recipe.service';
import { RecipeSummaryFragmentComponent } from './fragments/recipe-summary-fragment.component';
import { routing, appRoutingProviders } from '../app.routing';
import { NotFoundPageComponent } from './pages/not-found-page.component';

describe('App: Recipes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        routing
      ],
      declarations: [
        AppComponent,
        HomePageComponent,
        NotFoundPageComponent,
        RecipeSummaryFragmentComponent
      ],
      providers: [
        appRoutingProviders,
        {provide: RecipeService, useClass: PopulatedInMemoryRecipeService}
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
