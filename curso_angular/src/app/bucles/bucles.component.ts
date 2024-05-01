import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit{
  
  personas: Persona[] = [
    {nombre: "Juan", edad: 20},
    {nombre: "Ana", edad: 21},
    {nombre: "Luis", edad: 22},
    {nombre: "Maria", edad: 23},
  ];

  ngOnInit(): void {

  }

}

