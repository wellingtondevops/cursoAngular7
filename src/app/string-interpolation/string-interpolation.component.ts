import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

firstname= "Wellington";
age=100
person = {
  
  firstname: "Wellington",
  lastname: "Carvalho",
  age: 50,
  address: "Uberaba"
}

  constructor() { }

  ngOnInit() {
  }

}
