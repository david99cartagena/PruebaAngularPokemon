import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
    
    private pokemons:any[] = [
            {
            namepokemon:"Bulbasaur",
            descriptionpokemon:"Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
            idtypepokemon:1,
            typepokemon:"poison",
            imagepokemon:"assets/img/001.png"
            },
            {
            namepokemon:"Ivysaur",
            descriptionpokemon:"Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
            idtypepokemon:1,
            typepokemon:"poison",
            imagepokemon:"assets/img/002.png"
            },
            {
            namepokemon:"Venusaur",
            descriptionpokemon:"La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
            idtypepokemon:1,
            typepokemon:"poison",
            imagepokemon:"assets/img/003.png"
            },    
            {
            namepokemon:"Charmander",
            descriptionpokemon:"Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
            idtypepokemon:2,
            typepokemon:"fire",
            imagepokemon:"assets/img/004.png"
            },
            {
            namepokemon:"Charmeleon",
            descriptionpokemon:"Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
            idtypepokemon:2,
            typepokemon:"fire",
            imagepokemon:"assets/img/005.png"
            },
            {
            namepokemon:"Charizard",
            descriptionpokemon:"Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
            idtypepokemon:2,
            typepokemon:"fire",
            imagepokemon:"assets/img/006.png"
            },
            {
            namepokemon:"Squirtle",
            descriptionpokemon:"Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
            idtypepokemon:3,
            typepokemon:"water",
            imagepokemon:"assets/img/007.png"
            },
            {
            namepokemon:"Wartortle",
            descriptionpokemon:"Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
            idtypepokemon:3,
            typepokemon:"water",
            imagepokemon:"assets/img/008.png"
            },
            {
            namepokemon:"Blastoise",
            descriptionpokemon:"Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
            idtypepokemon:3,
            typepokemon:"water",
            imagepokemon:"assets/img/009.png"
            },
            {
            namepokemon:"Caterpie",
            descriptionpokemon:"Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos.",
            idtypepokemon:4,
            typepokemon:"bug",
            imagepokemon:"assets/img/010.png"
            },
            {
            namepokemon:"Metapod",
            descriptionpokemon:"Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar.",
            idtypepokemon:4,
            typepokemon:"bug",
            imagepokemon:"assets/img/011.png"
            }
    ];
    
    constructor() {
        console.log("servicio para uso");
    }
    getPokemons():Pokemon[]{
        return this.pokemons;
    }
    getPokemon(idx: number){
        return this.pokemons[idx];
    }
    getTipoPokemon(idy: number){
        return this.pokemons[idy];
    }

}
export interface Pokemon{
    namepokemon: string
    descriptionpokemon: string
    idtypepokemon: number
    typepokemon: string
    imagepokemon: string
}