import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MovieListComponent } from './movieList/movieList.component';
import { OrderComponent } from './order/order.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'list', loadChildren: 'app/movieList/movie.module#MovieModule' },
    { path: 'about', component: AboutComponent },
    { path: 'order', component: OrderComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [ AppComponent, HeaderComponent, AboutComponent, OrderComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
