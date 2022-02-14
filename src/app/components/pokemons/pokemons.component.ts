import { Component, OnInit } from '@angular/core';
import { PokemonService,Pokemon } from '../../services/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent implements OnInit {
  pokemons:Pokemon[] = [];
  

  constructor( private _pokemonsService: PokemonService,
               private router: Router) { }

  ngOnInit(): void {
    this.pokemons = this._pokemonsService.getPokemons();
    console.log(this.pokemons);
  }
  verPokemon(idx:number){
    this.router.navigate (['/pokemon',idx]);
  }
  verTipoPokemon(idy:number){
    this.router.navigate (['/type',idy]);
  }
}
