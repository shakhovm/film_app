import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favourites',
  templateUrl: './my-favourites.component.html',
  styleUrls: ['./my-favourites.component.css']
})
export class MyFavouritesComponent implements OnInit {
  films = [];

  constructor() { }

  onClick(i: number) {
    this.films.splice(i, 1);
  }

  ngOnInit(): void {
    this.films = JSON.parse(localStorage.getItem('films'));
    console.log(localStorage.getItem('films'));
  }

}
