import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
          AfterViewChecked, OnDestroy} from '@angular/core';

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
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
