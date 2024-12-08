import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public nameLower: string = 'julio';
  public nameUpper: string = 'JULIO';
  public fullName: string = 'jUlIo bArRiGa';

  public customDate: Date = new Date();

}
