import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  ApiQueryParams,
  RequestOptions,
  defaultOptions,
} from '../../typings/api-request';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  API_URL = environment.apiUrl;

  buildQueryString(params: ApiQueryParams) {
    const query = Object.entries(params)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, encodeURIComponent(String(value))]);

    return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
  }

  async apiRequest<T>(
    endpoint: string,
    query: ApiQueryParams = {},
    options: RequestOptions = {}
  ): Promise<T> {
    const mergedOptions: RequestOptions = { ...defaultOptions, ...options };
    const queryString: string = this.buildQueryString({
      ...query,
      ...mergedOptions,
    });
    try {
      const response = await fetch(`${this.API_URL}/${endpoint}${queryString}`);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}
