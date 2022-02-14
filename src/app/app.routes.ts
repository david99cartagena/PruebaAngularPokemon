import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TypeComponent } from './components/type/type.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'type/:id', component: TypeComponent },
  { path: 'pokemons', component:PokemonsComponent },
  { path: 'pokemon/:id', component:PokemonComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
