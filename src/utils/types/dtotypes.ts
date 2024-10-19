export interface SurfData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: Hourly;
}

export interface HourlyUnits {
  time: string;
  wave_height: string;
  wave_period: string;
  wind_wave_direction: string;
}

export interface Hourly {
  time: string[];
  wave_height: number[];
  wave_period: number[];
  wind_wave_direction: number[];
}

export interface WindData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyUnits;
  hourly: HourlyWind;
}

export interface HourlyWind {
  time: string[];
  temperature_2m: number[];
  pressure_msl: number[];
  surface_pressure: number[];
  wind_speed_10m: number[];
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  pressure_msl: string;
  surface_pressure: string;
  wind_speed_10m: string;
}
