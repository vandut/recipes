import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page.component';
import { RecipePageComponent } from './components/pages/recipe-page.component';

const appRoutes: Routes = [
  {path: 'recipe/:id', component: RecipePageComponent},
  {path: '', component: HomePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
