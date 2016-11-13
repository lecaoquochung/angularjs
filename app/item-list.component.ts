import {Component} from "angular2/core";

@Component({
   selector:'my-list',
   template:`<h2>List of PPAP</h2>
   <ul>
      <li *ngFor="#myItem of itemList">{{myItem.name}}</li>
   </ul>
   `
})
export class ItemComponent{
   public itemList = [
      {name:"Pen"},
      {name:"Apple"},
      {name:"Pen"},
      {name:"Pineaple"}
   ];
}
