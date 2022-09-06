import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bean } from '../model/bean';

@Injectable({
  providedIn: 'root'
})
export class BeansService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Bean[]> {
    return this.http.get<Bean[]>(`https://random-data-api.com/api/coffee/random_coffee?size=50&response_type=JSON`);
  }
}
