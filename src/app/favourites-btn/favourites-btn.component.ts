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

  constructor() {}

  onClick(): void {
    this.currentText = this.addedToFavourites ? 'Add To Favourites' : 'Remove From Favourites';
    this.btnStyle = this.addedToFavourites ? 'add-to-list' : 'remove-from-list';
    const films: ImdbFilm[] = JSON.parse(localStorage.getItem('films'));
    if (!this.addedToFavourites) {
      films.push(this.film);
    } else {
      films.splice(films.findIndex(film => this.film.imdbID === film.imdbID), 1);
    }
    localStorage.setItem('films', JSON.stringify(films));
    this.addedToFavourites = this.addedToFavourites !== true;
  }

  ngOnInit(): void {
    const films: ImdbFilm[] = JSON.parse(localStorage.getItem('films'));
    this.addedToFavourites = films.findIndex(film => film.imdbID === this.film.imdbID) !== -1;
    this.currentText = !this.addedToFavourites ? 'Add To Favourites' : 'Remove From Favourites';
    this.btnStyle = !this.addedToFavourites ? 'add-to-list' : 'remove-from-list';
  }

}
