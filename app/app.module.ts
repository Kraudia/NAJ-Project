
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MovieListComponent } from './movieList/movieList.component';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'list', loadChildren: 'app/movieList/movie.module#MovieModule' },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [ AppComponent, HeaderComponent, AboutComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
