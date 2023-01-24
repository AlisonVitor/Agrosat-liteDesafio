import { Injectable } from '@angular/core'
import { Farm } from './../models/Farm'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Owner } from '../models/Owner';


@Injectable({
  providedIn: 'root',
})
export class FarmService {
 
  url = 'http://localhost:3000/farms';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  saveFarm(farm: Farm): Observable<Farm> {
    return this.httpClient.post<Farm>(this.url, JSON.stringify(farm), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  

 
    list(): Observable<Farm[]> {
      return this.httpClient.get<Farm[]>(this.url)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
   
      errorMessage = error.error.message;
    } else {
     
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
