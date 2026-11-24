export interface GeocodingResult {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation?: number;
    country_code?: string;
    country?: string;
    admin1?: string; // estado/região
    timezone?: string;
    population?: number;
}

export interface GeocodingResponse {
    results?: GeocodingResult[];
    generationtime_ms: number;
}