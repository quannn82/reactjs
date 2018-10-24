import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  template: `
    <p>Birthday: {{ birthday | date : 'shortDate' }}</p>
    <p>{{ persion | json | uppercase }}</p>
    <p>{{ persion.name | uppercase }}</p>
    <p>{{ address | async }}</p>
    <div>
      <code>promise|async</code>:
      <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
      <span>Wait for it... {{ greeting | async }}</span>
    </div>
  `,
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(1990, 2, 23);
  persion = {name: 'Angular', version: '6'};
  address = Promise.resolve('703 Toa nha CMC 11 Duy Tan');

  greeting: Promise<string>|null = null;
  arrived = false;
  private resolve: Function|null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }

  ngOnInit() {
  }

}
