import { Injectable } from '@angular/core';
import { AboutInfo } from './about.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {

    constructor(private http: Http) {
    }

    getAbout() : Observable<AboutInfo> {
        return this.http.get('/api/about')
            .map((res) => res.json());
    }
}
