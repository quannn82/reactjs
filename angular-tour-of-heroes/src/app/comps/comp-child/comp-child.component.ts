import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-comp-child',
  template: `<h3>{{value}}</h3>
  <div>{{ name }}</div>
  <br />
  <button (click)="sub($event)">-</button>
  <button (click)="add($event)">+</button>
  `,
  styleUrls: ['./comp-child.component.css']
})
export class CompChildComponent implements OnInit {
  value = 0;
  @Output() myClick = new EventEmitter<boolean>();
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.myClick.emit(true);
  }

  sub() {
    this.myClick.emit(false);
  }
}
