import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public image?:string;
  public Tittle:string="curse de Angular con interpolation";
  @Input() dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
   this.image="https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg";
  }

}
