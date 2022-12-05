import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mi primer app Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void{
    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo:'Subtitulo Video 1',image:"https://www.todofondos.net/wp-content/uploads/Fondo-de-Pantalla-de-Meliodas-Nanatsu-No-Taizai-A-1273x700-1.jpg"},
      {titulo:'Video 2', subtitulo:'Subtitulo Video 2',image:"https://i.blogs.es/5d6007/luffy-en-one-piece/1366_2000.jpeg"},
      {titulo:'Video 3', subtitulo:'Subtitulo Video 3',image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/Naruto.jpg?fit=1280%2C720&ssl=1"},
    ]
  }
}
