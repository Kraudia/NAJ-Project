import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MovieListComponent } from './movieList/movieList.component';
import { OrderFormComponent } from './order/OrderForm.component';
import { OrderModule } from './order/order.module';
import { OrderService } from './order/order.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', loadChildren: 'app/movieList/movie.module#MovieModule' },
    { path: 'about', component: AboutComponent },
    { path: 'order', component: OrderFormComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        OrderModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [ AppComponent, HeaderComponent, AboutComponent, OrderFormComponent ],
    bootstrap: [ AppComponent ],
    providers: [ OrderService ]
})
export class AppModule { }
