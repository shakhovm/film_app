import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


interface FilmInfo {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: any;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {

  film: FilmInfo;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const imdbID = params.id;
      fetch(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=df17c889`)
        .then(resp => resp.json())
        .then(body => {

          this.film = {...body};
          console.log(this.film.Plot);
        });
    });

  }

}
