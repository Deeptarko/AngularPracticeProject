import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoggingService]
})
export class AppComponent {
  notesArr:string[]=[];
  title = 'my-task-keep';

  constructor(private loggingService:LoggingService){}

  saveNote(note:string){
    
    this.notesArr.push(note);
    this.loggingService.logStatus("Note has been added");
  }
}
