import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor (private http: HttpClient ){}
    baseUrl = "http://localhost:8000/api";


    public getUsers = () => {
        let httpOptions = {
            headers: new HttpHeaders({
                "Access-Control-Allow-Origin":"*",
                "ContentType" : "application/json",
            })
        };
        return this.http.get(this.baseUrl+'/get-users/',httpOptions);
    };
}
