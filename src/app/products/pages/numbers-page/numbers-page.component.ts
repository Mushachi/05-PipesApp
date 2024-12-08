import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent implements OnInit {

  public totalSells: number = 43222355335.34453;
  public porcentaje: number = 0.4532

  constructor() { }

  ngOnInit(): void {
  }

}
