import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="header">
        <ng-content select=".card-header"></ng-content>
      </div>
      <div class="body">
        <ng-content select=".card-body"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
