import { Component } from "@angular/core";
import { dbzService } from '../services/dbz.service';
import { Character } from "../interfaces/character.interface";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService: dbzService) {

  }

  deleteCharacterById(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  addCharacter(character: Character):void {
    this.dbzService.addCharacter(character);
  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }


}



