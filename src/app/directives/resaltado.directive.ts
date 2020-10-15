import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private elementRef: ElementRef ) {
    console.log("Directiva Llamada");
    //elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseDentro() {
    //console.log( this.nuevoColor );
    //this.elementRef.nativeElement.style.backgroundColor = "yellow";
    this.resaltar( this.nuevoColor || 'yellow' );
  }

  @HostListener('mouseleave') mouseFuera() {
    //this.elementRef.nativeElement.style.backgroundColor = null;
    this.resaltar( null );
  }

  private resaltar( color:string ){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
