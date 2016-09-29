import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app.component';
import { RecipeDetailsFragmentComponent } from './components/fragments/recipe-details-fragment.component';
import { RecipeService } from './services/recipe.service';
import { PopulatedInMemoryRecipeService } from './services/populated-in-memory-recipe.service';
import { RecipeSummaryFragmentComponent } from './components/fragments/recipe-summary-fragment.component';
import { HomePageComponent } from './components/pages/home-page.component';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsFragmentComponent,
    RecipeSummaryFragmentComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    {provide: RecipeService, useClass: PopulatedInMemoryRecipeService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
