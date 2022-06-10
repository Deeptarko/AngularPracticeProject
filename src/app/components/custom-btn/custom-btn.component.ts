import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.css']
})
export class CustomBtnComponent implements OnInit {

  @Output() clicked=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clicked.emit();
  }



}
