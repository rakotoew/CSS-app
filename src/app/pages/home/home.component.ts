import { Component, OnInit } from '@angular/core';

export interface Card{
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface Menu{
  cards: Card[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu: Menu = {
    cards: [
      {name: "Projet 1 : Snake", description: "Animated infinite snake", link:"projet1", image:"./../../../assets/image/img-projet1.png"},
      {name: "Projet 2", description: "Description projet 2", link:"projet2", image:""},
      {name: "Projet 3", description: "Description projet 3", link:"projet3", image:""},
      {name: "Projet 4", description: "Description projet 4", link:"projet4", image:""},
      {name: "Projet 5", description: "Description projet 5", link:"projet5", image:""},
      {name: "Projet 6", description: "Description projet 6", link:"projet6", image:""},
      {name: "Projet 7", description: "Description projet 7", link:"projet7", image:""}
    ]
  }

}
