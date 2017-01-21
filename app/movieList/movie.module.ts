import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movieList.component';
import { MovieComponent } from './movie.component';
import { OrderedMovieComponent } from './orderedMovie.component';
import { MovieService } from './movieList.service';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: MovieListComponent },
    { path: ':priority', component: MovieListComponent },
];

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ MovieListComponent, MovieComponent, OrderedMovieComponent ],
    exports: [ MovieListComponent ],
    providers: [ MovieService ]
})

export class MovieModule {

}
