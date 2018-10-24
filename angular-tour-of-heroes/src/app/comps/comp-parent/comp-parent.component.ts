import { Component, OnInit, ViewChild } from '@angular/core';
import { CompChildComponent } from '../comp-child/comp-child.component';

@Component({
  selector: 'app-demo-parent-child',
  template: `
    <p>
      Parent click !
    </p>
    <button (click)="sub()">-</button>
    <button (click)="add()">+</button>
    <app-comp-child (myClick)="clickChild($event)" [name]="Text1"></app-comp-child>
    <h4>{{number}}</h4>
  `,
  styleUrls: ['./comp-parent.component.css']
})
export class CompParentComponent implements OnInit {
  @ViewChild(CompChildComponent)
  myChild: CompChildComponent;
  number = 0;
  Text1 = 'ABV';

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.myChild.value++;
  }

  sub() {
    this.myChild.value--;
  }

  clickChild(isAdd) {
    this.number = (isAdd) ? this.number + 1 : this.number - 1;
  }

}
