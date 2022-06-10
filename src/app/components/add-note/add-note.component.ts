import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  @Output() saveNote=new EventEmitter();

  noteValue;

  constructor() { }

  ngOnInit(): void {
  }
  handleClick($event,noteValue){
  
    this.saveNote.emit(noteValue);
  }

}
