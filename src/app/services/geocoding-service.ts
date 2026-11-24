import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GeocodingResponse, GeocodingResult } from '../models/GeocodingModels';

@Service()
export class GeocodingService {
    private readonly GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';
    private readonly httpClient = inject(HttpClient);

    public searchByName(name: string, count = 5): Observable<GeocodingResult[]> {
        const params = new HttpParams()
            .set('name', name)
            .set('count', count)
            .set('language', 'pt')
            .set('format', 'json');

        return this.httpClient
            .get<GeocodingResponse>(this.GEOCODING_URL, { params })
            .pipe(map(res => res.results ?? []));
    }
}