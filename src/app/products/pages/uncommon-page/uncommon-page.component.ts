import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent implements OnInit {

  // i18n Select
  public name: string = 'Julio';
  public genero: 'male'|'female' = 'male';
  public invitacionMap = {
    male:'invitarlo',
    female:'invitarla'
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeClient():void {
    this.name = 'Maria';
    this.genero = 'female';
  }

}
