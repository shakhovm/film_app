import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  results = [];
  constructor() { }

  filmSearch(filmName: string): void {
    fetch(`http://www.omdbapi.com/?s=${filmName}&apikey=df17c889`)
      .then(resp => resp.json())
      .then(body => {
        console.log(body);
        this.results = body.Search;
        // this.currentId = this.results.imdbId;
      });
  }
  ngOnInit(): void {
  }

}
