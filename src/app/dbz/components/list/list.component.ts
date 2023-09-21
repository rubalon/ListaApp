import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Output()
  public onIdToDelete: EventEmitter<string> = new EventEmitter();

  emitIdToDelete(id?: string){
    if (!id) return;
    this.onIdToDelete.emit(id);
    //console.log(id);
  }

  @Input({})
  ListCharacter: Character[] = []
}
