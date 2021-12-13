import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:4200/api/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get(baseUrl);
  }

  get(id:number): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id:number, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title:string): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
