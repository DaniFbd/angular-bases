import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public animals:string[] = ['spider','formiga','mariquita','abella'];
public deleted?:string;
removeLastAnimal():void{
  this.deleted = this.animals.pop();
}
}
