import {Component, Input, OnInit} from '@angular/core';
import {ImdbFilm} from '../movie-list/movie-list.component';

@Component({
  selector: 'app-favourites-btn',
  templateUrl: './favourites-btn.component.html',
  styleUrls: ['./favourites-btn.component.css']
})
export class FavouritesBtnComponent implements OnInit {

  @Input() film: ImdbFilm;

  addedToFavourites: boolean;
  currentText: string;
  btnStyle: string;

  constructor() { }

  onClick(): void {
    this.currentText = this.addedToFavourites ? 'Add To Favourites' : 'Remove From Favourites';
    this.btnStyle = this.addedToFavourites ? 'add-to-list' : 'remove-from-list';
    if (this.addedToFavourites) {
      localStorage.removeItem(this.film.imdbID);
    } else {
      localStorage.setItem(this.film.imdbID, JSON.stringify(this.film));
    }
    this.addedToFavourites = this.addedToFavourites !== true;
  }

  ngOnInit(): void {
    const obj = localStorage.getItem(this.film.imdbID);
    this.addedToFavourites = obj !== null;
    this.currentText = !this.addedToFavourites ? 'Add To Favourites' : 'Remove From Favourites';
    this.btnStyle = !this.addedToFavourites ? 'add-to-list' : 'remove-from-list';
  }

}
