import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class dbzService {
  constructor() { }


  characters: Character[] = [{
    name: 'goku',
    power: 1000,
    id: uuid(),
  },{
    name:'gohan',
    power: 900,
    id: uuid(),
  },{
    name: 'Raditz',
    power: 2000,
    id: uuid(),
  }]

  addCharacter(character: Character):void {
   this.characters.push(character)
  }

  deleteCharacterById(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
