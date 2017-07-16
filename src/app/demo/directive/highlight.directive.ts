import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    exportAs: 'appHighlight'
})
export class HighlightDirective implements OnInit{
    constructor(private el: ElementRef){

    }

    ngOnInit(){
        this.el.nativeElement.style.backgroundColor = 'blue';
    }

    @HostListener('click')
    displayMessage(){
        alert('clicked');
    }

}