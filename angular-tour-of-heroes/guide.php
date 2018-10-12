ng serve
ng serve --open

ng generate service hero

ng generate class hero
-
ng generate component hero
Khởi tạo component dạng tempplate
-
ng generate component hero -it
Khởi tạo component dạng inline
-
{{expression}}
[target]="expression"
bind-target="expression"
One-way from data source to view target
-
(target)="statement"
on-target="statement"
One-way from view target to data source
-
[(target)]="expression"
bindon-target="expression"
Two-way

Binding targets

<img [src]="heroImageUrl">
<app-hero-detail [hero]="currentHero"></app-hero-detail>
<div [ngClass]="{'special': isSpecial}"></div>

<button (click)="onSave()">Save</button>
<app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>
<div (myClick)="clicked=$event" clickable>click me</div>

<input [(ngModel)]="name">

<button [attr.aria-label]="help">help</button>

<div [class.special]="isSpecial">Special</div>

<button [style.color]="isSpecial ? 'red' : 'green'">

<button [disabled]="isUnchanged">Cancel is disabled</button>

<input [value]="currentHero.name" (input)="currentHero.name=$event.target.value" >
Same send data Two-way
