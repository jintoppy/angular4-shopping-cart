import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map';

@Injectable()
export class ServerService{
    constructor(private http: Http){}

    getServers(servers: any[]){
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://5955445c2374e400111e47e7.mockapi.io/api/users', {headers})
                .map((response: Response) => {
                    const data = response.json();
                    return data; 
                });
    }
}