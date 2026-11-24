/** Campos comuns presentes em toda resposta de /v1/forecast. */
export interface OpenMeteoResponseBase {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
}

export interface CurrentWeather {
    time: string;
    interval: number;
    temperature_2m: number;
    wind_speed_10m: number;
}

export interface CurrentWeatherUnits {
    time: string;
    interval: string;
    temperature_2m: string;
    wind_speed_10m: string;
}

export interface HourlyWeather {
    time: string[];
    temperature_2m: number[];
}

export interface HourlyWeatherUnits {
    time: string;
    temperature_2m: string;
}

export interface ForecastResponse extends OpenMeteoResponseBase {
    current?: CurrentWeather;
    current_units?: CurrentWeatherUnits;
    hourly?: HourlyWeather;
    hourly_units?: HourlyWeatherUnits;
}