import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
    constructor(private el: ElementRef){

    }

    ngOnInit(){
        this.el.nativeElement.style.backgroundColor = 'blue';
    }
}