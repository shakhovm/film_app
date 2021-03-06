import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { FavouritesBtnComponent } from './favourites-btn/favourites-btn.component';
import { MyFavouritesComponent } from './my-favourites/my-favourites.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movieInfo/:id', component: MovieInfoComponent},
  {path: 'movieList/:id', component: MovieListComponent},
  {path: 'my-favourites', component: MyFavouritesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieInfoComponent,
    FavouritesBtnComponent,
    MyFavouritesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
