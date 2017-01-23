import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Borrow } from './borrow.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BorrowService {

	public message : string;

	constructor(private http: Http) {
    }
    
    borrowMovies (borrow: Borrow){
    	let headers: Headers = new Headers({
	        'Content-Type': 'application/json',
	        'Accept': 'application/json'
	    });

    	let options = new RequestOptions({ headers: headers });

        return this.http.post('/api/borrow', JSON.stringify(borrow), options)
            .map(this.extractData);
    }

    private extractData(res: Response) {
    	console.log(res);
    	if (res.status) this.message = res.status;
	    let body = res.json();
	    return body.data || { };
	}
}