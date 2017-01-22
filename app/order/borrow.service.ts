import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Borrow } from './../models/borrow.model';
import 'rxjs/add/operator/map';

@Injectable()
export class BorrowService {

    constructor(private http: Http) {
    }
    
    borrowMovies (borrow: Borrow){
        return this.http.post('/api/borrow/', JSON.stringify(borrow))
            .map(response => response.json());
    }
}