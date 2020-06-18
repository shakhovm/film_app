import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


export interface ImdbFilm {
  Poster;
  Title;
  Type;
  Year;
  imdbID;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})


export class MovieListComponent implements OnInit {

  results: ImdbFilm[] = [];
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      const filmName = routeParams.id;
      fetch(`http://www.omdbapi.com/?s=${filmName}&apikey=df17c889`)
        .then(resp => resp.json())
        .then(body => {
          if (body.Response !== 'False') {
            this.results = body.Search;
          }
        })
        .catch(e => {});
    });

  }
}
