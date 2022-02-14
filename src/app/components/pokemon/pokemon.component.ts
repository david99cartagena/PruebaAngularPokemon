import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})

export class PokemonComponent{
  pokemon:any={};

  constructor( private activatedRoute:ActivatedRoute,
               private _pokemonService:PokemonService) { 
    this.activatedRoute.params.subscribe(params => {
      this.pokemon = this._pokemonService.getPokemon(params['id']);
    })
  }


}
