import {Component, OnInit} from '@angular/core';
import { Persona } from '../persona';

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent implements OnInit {
    constructor(){

    }

    ngOnInit(): void {
        
    }

    nombre = "Tu hermana";
    persona:Persona = {
        nombre: "Franco",
        edad: 21
    }

    numero: number = 1;

    incrementar(){
        this.numero++;
    }

    decrementar(){
        this.numero--;
    }
}