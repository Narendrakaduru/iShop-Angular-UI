import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseURL = "http://localhost:6500";
  constructor(private http: HttpClient){}

  GetAllProducts():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/getAllProducts`);
  }

  GetAllCategories():Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/getAllCategories`);
  }

  RegisterCustomer(data:any):Observable<any[]>{
    return this.http.post<any>(`${this.baseURL}/saveCustomer`, data);
  }

  GetCustomer():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseURL}/getAllCustomers`);
  }

}
