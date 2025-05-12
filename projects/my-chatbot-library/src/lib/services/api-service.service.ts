import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://localhost:8000/ask';

  constructor(private http: HttpClient) {}

  askQuestion(question: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { question });
  }
}
