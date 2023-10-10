import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class dbzService {
  constructor() { }


  characters: Character[] = [{
    name: 'Rubén',
    power: 24,
    id: uuid(),
  },{
    name:'Raúl',
    power: 32,
    id: uuid(),
  },{
    name: 'Guillermo',
    power: 20,
    id: uuid(),
  }]

  addCharacter(character: Character):void {
   this.characters.push(character)
  }

  deleteCharacterById(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
