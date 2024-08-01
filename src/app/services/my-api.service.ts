import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  
  private urlApi = 'http://localhost:5194/api/';  
  
  constructor(private http: HttpClient) { }

  public getDataClases(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}clases`);
  }

  public getDataClasesById(id: number): Observable<any> {
    
    return this.http.get<any>(`${this.urlApi}clases/${id}`);
  }

  public getDataSubclases(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}subclases`);
  }

  public getDataSubclasesById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}subclases/${id}`);
  }

  public getDataArmadurasExoticas(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}armadurasExoticas`);
  }

  public getDataArmadurasExoticasById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}armadurasExoticas/${id}`);
  }

  public getDataArmas(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}armas`);
  }

  public getDataArmasById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}armas/${id}`);
  }

  public getDataBuilds(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}builds`);
  }

  public getDataBuildsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}builds/${id}`);
  }

  public postBuild(data: any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}builds`, data);
  }


}
