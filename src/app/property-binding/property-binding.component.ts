import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string ="accent"
  btnDisable= true;
  colors =['primary', 'accent', 'warn', '']
  idx=0

  constructor() { }

  ngOnInit() {
    setInterval( ()=>{
      this.idx = (this.idx+1) % this.colors.length
    },100)

  }

}
