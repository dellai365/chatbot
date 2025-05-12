import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  askQuestion(question: string) {
    return this.http.post<{ response: string }>(`${this.apiUrl}/ask`, { question });
  }
}
