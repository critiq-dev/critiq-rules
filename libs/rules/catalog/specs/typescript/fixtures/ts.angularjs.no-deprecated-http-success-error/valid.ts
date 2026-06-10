import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get('/api/items').subscribe({
      next: (data) => console.log('Got items:', data),
      error: (err) => console.error('Failed:', err),
    });
  }
}
