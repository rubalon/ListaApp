import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  character: Character = {
    name: '',
    power: 0,
    id: uuid()
  }

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter():void {
    //Comprobamos que se ha introducido un nombre
    if (this.character.name.length === 0) return;

    //Emitimos el character
    this.onNewCharacter.emit(this.character);

    //reseteamos los valores
    this.character = { name: '', power: 0, id: uuid() };


  }

}
