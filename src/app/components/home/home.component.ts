import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <hr>
    <app-ng-style></app-ng-style>
  <hr>
    <app-css></app-css>
  <hr>
    <app-clases></app-clases>
  <hr>
    <p [appResaltado]="'orange'">
      Directivas Personalizadas
    </p>
  <hr>
    <app-ng-switch></app-ng-switch>
  <hr>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
