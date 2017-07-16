import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from '@angular/core/testing';

import {TestComponent} from './test.component';

describe('Test Component', () => {
    let comp: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent
            ]
        })
        .compileComponents();        

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);

        comp = fixture.componentInstance;
        
        de = fixture.debugElement.query(By.css('h1'));

        el = de.nativeElement;
    });

    it('should be true', () => {
        expect(true).toBe(true);
    });

    it('should display original title', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');

    });

});