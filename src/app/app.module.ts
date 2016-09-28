import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app.component';
import { RecipeComponent } from './components/recipe.component';
import { RecipeService } from './services/recipe.service';
import { PopulatedInMemoryRecipeService } from './services/populated-in-memory-recipe.service';
import { RecipeSummaryComponent } from './components/recipe-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: RecipeService, useClass: PopulatedInMemoryRecipeService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
