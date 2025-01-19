import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDataModel } from '../models/card-data.model';

@Injectable({
    providedIn: 'root'
})
export class CardDataService {
    constructor(private http: HttpClient) {}

    url = '/assets/form-data.json';

    getCardData(): Observable<CardDataModel[]> {
        return this.http.get<CardDataModel[]>(this.url);
    }
}
