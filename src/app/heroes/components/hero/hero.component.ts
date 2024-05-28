import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
public name:string = 'ironMan';
public age:number = 45;

get capitalizedName():string{
  return this.name.toUpperCase();
}
getHeroDescription():string{
  return `${this.name} - ${this.age}`;
}

changeHero(newName:string):void{
  this.name = newName;
}

changeAge(newAge:number):void{
  this.age = newAge;
}

reset():void{
  this.name = 'ironMan';
  this.age = 45;
  //document.querySelector('h1')!.innerHTML= '<h1>Desde angular</h1>';

//document.querySelectorAll('h1')!.forEach( elemento => {
//  elemento.innerHTML= '<h1>Desde angular</h1>';
//})
}
}
