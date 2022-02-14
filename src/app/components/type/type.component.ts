import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemons.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html'
})
export class TypeComponent {
  pokemons:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _pokemonService:PokemonService){ 
    this.activatedRoute.params.subscribe(params => {
      this.pokemons = this._pokemonService.getTipoPokemon(params['id']);
    })
  }

}
