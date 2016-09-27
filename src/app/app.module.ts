import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app.component';
import { RecipeComponent } from './components/recipe.component';
import { RecipeService } from './services/recipe.service';
import { MockRecipeService } from './services/mock-recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: RecipeService, useClass: MockRecipeService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
