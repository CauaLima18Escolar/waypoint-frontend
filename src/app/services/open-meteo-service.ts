import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ForecastResponse } from '../models/OpenMeteoModels';

/**
 * Serviço responsável por realizar a comunicação com a API de tempo OpenMeteo e
 * obter dados relativos ao clima de um determindo local.
 * 
 * @author CauaAraujo
 */
@Service()
export class OpenMeteoService {
    private readonly OPEN_METEO_URL = "https://api.open-meteo.com/v1/"
    private readonly httpClient = inject(HttpClient);

    public getForecast(latitude: number, longitude: number): Observable<ForecastResponse> {
        const params = new HttpParams()
            .set('latitude', latitude)
            .set('longitude', longitude)
            .set('current', 'temperature_2m,wind_speed_10m')
            .set('hourly', 'temperature_2m');

        return this.httpClient.get<ForecastResponse>(`${this.OPEN_METEO_URL}/forecast`, { params });
    }
}
