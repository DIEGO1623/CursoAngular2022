import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public image:string="https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg";
  public Tittle:string="curse de Angular con interpolation";
  constructor() { }

  ngOnInit(): void {
  }

}
